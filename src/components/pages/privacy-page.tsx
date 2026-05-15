"use client"

import type { PageName } from "@/components/site-header"

interface PrivacyPageProps {
  onNavigate: (page: PageName) => void
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>
              Welcome to CodeForge (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy
              and ensuring that your personal information is handled responsibly. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website codeforge.dev
              (the &quot;Site&quot;). Please read this privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect information about you in a variety of ways:</p>
            <h3 className="text-lg font-medium text-foreground mb-2">Personal Data</h3>
            <p className="mb-3">
              Personally identifiable information, such as your name, email address, and contact information,
              which you voluntarily give to us when you choose to subscribe to our newsletter or contact us
              through our contact form. We do not require registration or account creation to use our tools.
            </p>
            <h3 className="text-lg font-medium text-foreground mb-2">Derivative Data</h3>
            <p className="mb-3">
              Information our servers automatically collect when you access the Site, such as your IP address,
              your browser type, your operating system, your access times, and the pages you have viewed directly
              before and after accessing the Site.
            </p>
            <h3 className="text-lg font-medium text-foreground mb-2">Tool Data</h3>
            <p>
              All data processed by our developer tools (image compressor, word counter, JSON formatter, etc.)
              is processed entirely in your browser and is never transmitted to our servers. We do not collect,
              store, or have access to any data you input into our tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Use of Information</h2>
            <p className="mb-2">We may use the information we collect about you for various purposes, including to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Send you newsletters and updates you have subscribed to</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze usage and trends to improve your experience</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
              <li>Provide, operate, and maintain our website and tools</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Cookies and Tracking Technologies</h2>
            <p className="mb-3">
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to
              help customize the Site and improve your experience. When you access the Site, your personal
              information is not collected through the use of tracking technology. Most browsers are set to
              accept cookies by default. You can remove or reject cookies, but be aware that such action could
              affect the availability and functionality of the Site.
            </p>
            <p>
              We use cookies for the following purposes: storing your theme preference (light/dark mode),
              analyzing site traffic and usage patterns through Google Analytics, and serving relevant
              advertisements through Google AdSense. You can opt out of personalized advertising by visiting
              Google&apos;s Ads Settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Third-Party Services</h2>
            <h3 className="text-lg font-medium text-foreground mb-2">Google AdSense</h3>
            <p className="mb-3">
              We use Google AdSense to display advertisements on our Site. Google AdSense may use cookies and
              web beacons to serve ads based on your prior visits to our Site or other websites. Google&apos;s use
              of advertising cookies enables it and its partners to serve ads to you based on your visit to our
              Site and/or other sites on the Internet. You may opt out of personalized advertising by visiting
              Google Ads Settings. For more information about how Google uses data, please visit
              Google&apos;s Privacy &amp; Terms page.
            </p>
            <h3 className="text-lg font-medium text-foreground mb-2">Google Analytics</h3>
            <p>
              We use Google Analytics to track and analyze website traffic. Google Analytics collects information
              such as how often users visit our Site, what pages they visit, and what other sites they used prior
              to coming to our Site. We use this information solely to improve our Site and services. Google
              Analytics collects only the IP address assigned to you on the date you visit the Site, rather than
              your name or other identifying information. You can learn more about Google Analytics practices at
              Google Analytics Privacy Overview.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide
              to us, please be aware that despite our efforts, no security measures are perfect or impenetrable,
              and no method of data transmission can be guaranteed against any interception or other type of
              misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized
              parties. Therefore, we cannot guarantee complete security if you provide personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Children&apos;s Privacy</h2>
            <p>
              Our Site is not intended for children under the age of 13, and we do not knowingly collect personal
              information from children under 13. If we learn that we have collected personal information from a
              child under age 13 without verification of parental consent, we will delete that information as
              quickly as possible. If you believe we might have any information from or about a child under 13,
              please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time in order to reflect changes to our practices,
              technologies, legal requirements, and other factors. We will alert you about any changes by updating
              the &quot;Last updated&quot; date of this Privacy Policy. We encourage you to review this Privacy Policy
              periodically to stay informed about how we are protecting your information. Your continued use of
              the Site after any changes to this Privacy Policy constitutes your acceptance of such changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy or how we handle your personal
              information, please contact us at:
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
