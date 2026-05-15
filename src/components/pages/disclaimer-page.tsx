"use client"

import type { PageName } from "@/components/site-header"

interface DisclaimerPageProps {
  onNavigate: (page: PageName) => void
}

export function DisclaimerPage({ onNavigate }: DisclaimerPageProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Disclaimer</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">General Disclaimer</h2>
            <p>
              The information provided on CodeForge (&quot;the Site&quot;) is for general informational and educational
              purposes only. All information on the Site is provided in good faith; however, we make no
              representation or warranty of any kind, express or implied, regarding the accuracy, adequacy,
              validity, reliability, availability, or completeness of any information on the Site. Under no
              circumstance shall we have any liability to you for any loss or damage of any kind incurred as a
              result of the use of the Site or reliance on any information provided on the Site. Your use of the
              Site and your reliance on any information on the Site is solely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Tool Results Disclaimer</h2>
            <p>
              The developer tools provided on CodeForge are designed to assist with common development tasks.
              While we strive for accuracy and reliability, the results produced by our tools are provided
              &quot;as is&quot; without any guarantees. Image compression results may vary depending on the original
              image format and content. Password strength assessments are estimates based on common security
              practices and do not guarantee protection against all attack vectors. Color conversions between
              HEX, RGB, and HSL formats may have minor rounding differences. JSON formatting relies on the
              JavaScript JSON parser and may produce different results than other parsers for edge cases.
              Always verify the output of any tool before using it in production environments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Affiliate Links Disclaimer</h2>
            <p>
              The Site may contain affiliate links. This means that if you click on certain links and make a
              purchase, we may receive a small commission at no additional cost to you. These commissions help
              us maintain and improve the Site and continue providing free developer tools and content. We only
              recommend products and services that we genuinely believe will add value to our readers. Our
              recommendations are not influenced by the commission we may receive. The presence of affiliate
              links does not affect the price you pay for any product or service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Content Disclaimer</h2>
            <p>
              The Site may contain links to third-party websites, services, or content that are not owned or
              controlled by CodeForge. We have no control over, and assume no responsibility for, the content,
              privacy policies, or practices of any third-party websites or services. The inclusion of any link
              on our Site does not imply our endorsement, sponsorship, or recommendation of the linked website
              or its content, products, or services. We strongly advise you to read the terms and conditions and
              privacy policies of any third-party websites or services that you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Professional Advice Disclaimer</h2>
            <p>
              The Site and its content, including blog articles, tutorials, and tool descriptions, are provided
              for informational purposes only and should not be construed as professional advice of any kind,
              including but not limited to software development advice, security advice, or legal advice. The
              information presented is based on our experience and research and may not be suitable for every
              situation. You should always consult with a qualified professional before making any decisions
              based on the information provided on the Site. Do not disregard professional advice or delay
              seeking it because of something you have read on the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">External Website Disclaimer</h2>
            <p>
              CodeForge is not responsible for the content, accuracy, or opinions expressed on external websites
              that may be linked from our Site. The inclusion of any external link does not imply endorsement by
              CodeForge. We do not guarantee the availability or functionality of external websites. External
              websites may have their own terms of use and privacy policies, and we encourage you to review
              them before providing any personal information or using their services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Disclaimer</h2>
            <p>
              We may update this Disclaimer from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We will notify you of any changes by updating the
              &quot;Last updated&quot; date at the top of this page. We encourage you to review this Disclaimer
              periodically for any updates. Changes to this Disclaimer are effective when they are posted on
              this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, please contact us at:
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
