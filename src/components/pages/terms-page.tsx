"use client"

import type { PageName } from "@/components/site-header"

interface TermsPageProps {
  onNavigate: (page: PageName) => void
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using CodeForge (the &quot;Site&quot;), you accept and agree to be bound by the terms and
              provisions of this agreement. If you do not agree to abide by these terms, please do not use this
              Site. These Terms and Conditions apply to all visitors, users, and others who access or use the
              Site. We reserve the right to update or change these terms at any time without prior notice. It is
              your responsibility to check these terms periodically for changes. Your continued use of the Site
              following the posting of any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Use of the Website</h2>
            <p className="mb-2">You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Use the Site in any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Site</li>
              <li>Take any action that imposes an unreasonable or disproportionately large load on our infrastructure</li>
              <li>Use any automated system, including robots, spiders, or scrapers, to access the Site for any purpose without our express written permission</li>
              <li>Attempt to impersonate another user or person or use the username of another user</li>
              <li>Upload or transmit viruses, Trojan horses, or other malicious material</li>
              <li>Use the Site to transmit, distribute, or store material that is unlawful, harassing, libelous, or otherwise objectionable</li>
              <li>Interfere with or disrupt the Site or servers or networks connected to the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h2>
            <p>
              The Site and its entire contents, features, and functionality — including but not limited to all
              information, software, source code, text, displays, images, video, and audio, and the design,
              selection, and arrangement thereof — are owned by CodeForge, its licensors, or other providers of
              such material and are protected by international copyright, trademark, patent, trade secret, and
              other intellectual property or proprietary rights laws. You are granted a limited, non-exclusive,
              non-transferable, revocable license to access and use the Site and its content for personal,
              non-commercial use only. This license does not include the right to modify, reproduce, distribute,
              display publicly, or create derivative works from the content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. User Content</h2>
            <p>
              Our developer tools process data entirely within your browser. We do not collect, store, or
              transmit any data you input into our tools. You retain full ownership and responsibility for all
              content you process using our tools. You are solely responsible for ensuring that your use of our
              tools complies with all applicable laws and regulations. We are not liable for any loss, damage,
              or harm resulting from your use of the tools provided on this Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Disclaimer of Warranties</h2>
            <p>
              THE SITE AND ITS CONTENT ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT ANY
              REPRESENTATIONS OR WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES,
              REPRESENTATIONS, AND CONDITIONS, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT
              THE SITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE. WE DO NOT WARRANT THAT THE RESULTS
              OBTAINED FROM THE USE OF THE SITE OR ITS TOOLS WILL BE ACCURATE OR RELIABLE. YOU UNDERSTAND AND
              AGREE THAT YOUR USE OF THE SITE AND ITS CONTENT IS AT YOUR SOLE RISK.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL CODEFORGE, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
              WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING
              FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SITE; (B) ANY CONDUCT OR
              CONTENT OF ANY THIRD PARTY ON THE SITE; (C) ANY CONTENT OBTAINED FROM THE SITE; OR (D) UNAUTHORIZED
              ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT,
              TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF
              THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF
              ITS ESSENTIAL PURPOSE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites or services that are not owned or controlled
              by CodeForge. We have no control over, and assume no responsibility for, the content, privacy
              policies, or practices of any third-party websites or services. You further acknowledge and agree
              that CodeForge shall not be responsible or liable, directly or indirectly, for any damage or loss
              caused or alleged to be caused by or in connection with the use of or reliance on any such content,
              goods, or services available on or through any such third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Pakistan, without
              regard to its conflict of law provisions. Our failure to enforce any right or provision of these
              Terms will not be considered a waiver of those rights. If any provision of these Terms is held to
              be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in
              effect. These Terms constitute the entire agreement between us regarding our Service, and supersede
              any prior agreements we might have had.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to These Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
              revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect.
              What constitutes a material change will be determined at our sole discretion. By continuing to
              access or use our Site after those revisions become effective, you agree to be bound by the revised
              terms. If you do not agree to the new terms, you are no longer authorized to use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-3 p-4 bg-muted/50 rounded-lg">
              <p className="font-medium text-foreground">CodeForge</p>
              <p>Email: contact@codeforge.dev</p>
              <p>Location: Pakistan</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
