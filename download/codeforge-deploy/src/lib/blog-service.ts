import { db } from "./firebase"
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore"
import { blogPosts as staticPosts, type BlogPost } from "./blog-data"

const COLLECTION_NAME = "blogs"

// Convert Firestore document to BlogPost
function docToBlog(docSnap: any): BlogPost & { firestoreId?: string } {
  const data = docSnap.data()
  return {
    id: data.id || docSnap.id,
    title: data.title || "",
    excerpt: data.excerpt || "",
    date: data.date || new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    category: data.category || "Web Development",
    readTime: data.readTime || "5 min",
    content: data.content || "",
    firestoreId: docSnap.id,
  }
}

// Get all blogs (Firestore + static fallback)
export async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy("createdAt", "desc"))
    const snapshot = await getDocs(q)
    const firestoreBlogs = snapshot.docs.map(docToBlog)

    if (firestoreBlogs.length > 0) {
      // Merge: Firestore blogs first, then static blogs that aren't duplicated
      const firestoreIds = new Set(firestoreBlogs.map(b => b.id))
      const uniqueStaticPosts = staticPosts.filter(p => !firestoreIds.has(p.id))
      return [...firestoreBlogs, ...uniqueStaticPosts]
    }

    return staticPosts
  } catch (error) {
    console.error("Error fetching blogs from Firestore, using static data:", error)
    return staticPosts
  }
}

// Get a single blog by ID
export async function getBlogById(id: string): Promise<BlogPost | null> {
  try {
    const q = query(collection(db, COLLECTION_NAME))
    const snapshot = await getDocs(q)
    const blog = snapshot.docs.find(d => docToBlog(d).id === id)
    if (blog) return docToBlog(blog)
  } catch (error) {
    console.error("Error fetching blog from Firestore:", error)
  }

  // Fallback to static data
  return staticPosts.find(p => p.id === id) || null
}

// Add a new blog to Firestore
export async function addBlog(blog: Omit<BlogPost, "id"> & { id?: string }): Promise<string> {
  const slug = blog.title
    ? blog.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
    : `blog-${Date.now()}`

  const docRef = await addDoc(collection(db, COLLECTION_NAME), {
    ...blog,
    id: blog.id || slug,
    createdAt: serverTimestamp(),
  })
  return docRef.id
}

// Update a blog in Firestore
export async function updateBlog(firestoreId: string, updates: Partial<BlogPost>): Promise<void> {
  const docRef = doc(db, COLLECTION_NAME, firestoreId)
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  })
}

// Delete a blog from Firestore
export async function deleteBlog(firestoreId: string): Promise<void> {
  const docRef = doc(db, COLLECTION_NAME, firestoreId)
  await deleteDoc(docRef)
}

// Get only Firestore blogs (for admin panel)
export async function getFirestoreBlogs(): Promise<(BlogPost & { firestoreId: string })[]> {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy("createdAt", "desc"))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(docToBlog) as (BlogPost & { firestoreId: string })[]
  } catch (error) {
    console.error("Error fetching Firestore blogs:", error)
    return []
  }
}
