export const metadata = {
  title: "Privacy Policy | Western PA Solar Installation",
  description:
    "Privacy policy for Western PA Solar Installation. Learn how we collect, use, and protect your information when you request a free solar assessment in Western Pennsylvania.",
};

const COMPANY_NAME = "WESTERN PA SOLAR INSTALLATION";
const CONTACT_EMAIL = "privacy@westernpasolar.com";
const CONTACT_PHONE = "(555) 123-4567";
const CONTACT_ADDRESS = "123 Solar Way, Pittsburgh, PA 15201";
const LAST_UPDATED = "February 16, 2025";

const HEADER_NAV_ITEMS = [
  { href: "#info-we-collect", label: "Information We Collect" },
  { href: "#how-we-use", label: "How We Use" },
  { href: "#ai-calls", label: "Calls & AI" },
  { href: "#sharing", label: "Sharing" },
  { href: "#choices", label: "Choices" },
  { href: "#contact", label: "Contact" },
];

const TOC_ITEMS = [
  { href: "#overview", label: "Overview" },
  { href: "#info-we-collect", label: "Information We Collect" },
  { href: "#how-we-use", label: "How We Use Information" },
  { href: "#ai-calls", label: "Calls, Texts & AI Communications" },
  { href: "#sharing", label: "How We Share Information" },
  { href: "#retention", label: "Data Retention" },
  { href: "#choices", label: "Your Choices and Rights" },
  { href: "#security", label: "Security" },
  { href: "#children", label: "Children's Privacy" },
  { href: "#updates", label: "Updates to This Policy" },
  { href: "#contact", label: "Contact Us" },
];

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <span className="text-lg font-semibold text-slate-900">{COMPANY_NAME}</span>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {HEADER_NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:max-w-5xl lg:grid lg:grid-cols-[1fr_240px] lg:gap-12">
        <main className="min-w-0">
          <p className="mb-6 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>

          <section className="mb-12">
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Privacy Policy</h1>
            <p className="text-lg leading-relaxed text-slate-600">
              This policy describes how {COMPANY_NAME} collects, uses, and protects your information when you request a free solar assessment or use our services in Western Pennsylvania.
            </p>
          </section>

          <section id="overview" className="mb-10 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">1. Overview</h2>
            <p className="leading-relaxed text-slate-700">
              {COMPANY_NAME} serves homeowners in Western Pennsylvania by offering a free 30-minute in-person appointment at your home to assess solar suitability and estimated savings. Our programs include Power Purchase Agreements (PPA) and similar arrangements that can provide a fixed or lower energy rate compared to rising utility rates. To provide these services, we collect and use information as described in this policy. By using our website, requesting an appointment, or otherwise engaging with us, you agree to this Privacy Policy.
            </p>
          </section>

          <section id="info-we-collect" className="mb-10 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">2. Information We Collect</h2>
            <div className="space-y-4 text-slate-700">
              <div>
                <h3 className="mb-1 font-medium text-slate-800">Contact information</h3>
                <p className="leading-relaxed">Name, phone number, email address, and other details you provide when you request an appointment or contact us.</p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-slate-800">Address and location</h3>
                <p className="leading-relaxed">Your property address and location data used to schedule in-home appointments and to perform roof and sunlight analysis (including via tools such as EagleView and similar services).</p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-slate-800">Property and eligibility information</h3>
                <p className="leading-relaxed">Information related to your home and eligibility for our programs, such as homeownership status, whether the property is a single-family home, shading or tree coverage, and approximate utility bill range. We use this to screen for program eligibility (e.g., single-family homes, adequate sunlight, and credit-related criteria such as a credit score of 600 or above where applicable).</p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-slate-800">Communication preferences</h3>
                <p className="leading-relaxed">Your preferences for how we contact you (e.g., phone, email, SMS) and any marketing opt-in or opt-out choices.</p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-slate-800">Website and app data</h3>
                <p className="leading-relaxed">When you visit our website or use our online services, we may collect information through cookies, log data, and similar technologies. This may include IP address, browser type, device information, and usage data. We may use analytics services to understand how visitors use our site; such data is typically aggregated and used in accordance with our vendors&apos; policies.</p>
              </div>
            </div>
          </section>

          <section id="how-we-use" className="mb-10 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">3. How We Use Information</h2>
            <ul className="list-inside list-disc space-y-2 leading-relaxed text-slate-700">
              <li>Scheduling and confirming your free in-home appointment and sending related reminders or updates.</li>
              <li>Providing solar suitability assessments, estimates, and explanations of PPA and other program options at your home.</li>
              <li>Using roof and sunlight analysis (e.g., EagleView) to evaluate your property and prepare recommendations.</li>
              <li>Improving our advertising and lead quality in the aggregate (e.g., analyzing campaign performance); we do not use your personal information for this in a way that identifies you individually in marketing reports.</li>
              <li>Complying with legal obligations and protecting our rights and the security of our systems.</li>
            </ul>
          </section>

          <section id="ai-calls" className="mb-10 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div className="mb-4 rounded-lg border-2 border-amber-200 bg-amber-50/80 p-4">
              <p className="text-sm font-medium text-amber-900">
                Important: We may contact you by phone and/or SMS using automated technology and/or AI-assisted systems to schedule appointments and provide updates. Consent to these communications is not required as a condition of purchasing any goods or services.
              </p>
            </div>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">4. Calls, Texts, and AI/Automated Communications</h2>
            <div className="space-y-4 leading-relaxed text-slate-700">
              <p>We may contact you by phone, SMS, or other electronic means to schedule your free in-home appointment, confirm details, send reminders, and provide updates about our services. These communications may be sent or assisted by automated technology, including AI-based systems, prerecorded messages, or autodialers.</p>
              <p><strong>Consent is not a condition of purchase.</strong> You do not have to agree to receive these calls or texts in order to purchase any goods or services from us.</p>
              <p><strong>Opt-out:</strong> To stop receiving promotional or non-essential text messages, reply <strong>STOP</strong> to any message or follow the instructions in the message. For calls, you may request to be removed from our call list by contacting us at {CONTACT_EMAIL} or {CONTACT_PHONE}. We will process your request as promptly as practicable.</p>
              <p className="text-sm text-slate-600">Message and data rates may apply for SMS depending on your wireless plan.</p>
            </div>
          </section>

          <section id="sharing" className="mb-10 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">5. How We Share Information</h2>
            <p className="mb-4 leading-relaxed text-slate-700">
              We may share your information with service providers who assist us in operating our business, including CRM platforms, call and SMS providers, analytics providers, and vendors that support roof/sunlight analysis (e.g., EagleView). These parties are contractually required to use your information only for the purposes we specify and to protect it in line with this policy.
            </p>
            <p className="leading-relaxed text-slate-700">
              We do not sell your personal information. We may disclose information where required by law, to protect our rights or safety, or in connection with a merger, sale, or other transfer of assets, subject to applicable law.
            </p>
          </section>

          <section id="retention" className="mb-10 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">6. Data Retention</h2>
            <p className="leading-relaxed text-slate-700">
              We retain your information for as long as needed to provide scheduling and solar assessment services, fulfill our contractual and legal obligations, and resolve disputes. Where possible, we will delete or de-identify your information upon your request, subject to legal retention requirements.
            </p>
          </section>

          <section id="choices" className="mb-10 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">7. Your Choices and Rights</h2>
            <ul className="list-inside list-disc space-y-2 leading-relaxed text-slate-700">
              <li><strong>Access and correction:</strong> You may request access to or correction of the personal information we hold about you by contacting us.</li>
              <li><strong>Deletion:</strong> You may request deletion of your personal information where feasible and consistent with applicable law.</li>
              <li><strong>Marketing opt-out:</strong> You may opt out of marketing emails by using the unsubscribe link in our emails or by contacting us. For SMS, reply STOP as described in Section 4.</li>
              <li><strong>Cookies:</strong> Many browsers allow you to manage cookie preferences (e.g., block or delete cookies). Note that limiting cookies may affect site functionality.</li>
            </ul>
          </section>

          <section id="security" className="mb-10 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">8. Security</h2>
            <p className="leading-relaxed text-slate-700">
              We use reasonable administrative, technical, and physical safeguards to help protect your personal information against unauthorized access, loss, or alteration. No method of transmission or storage is completely secure; we cannot guarantee absolute security of your data.
            </p>
          </section>

          <section id="children" className="mb-10 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">9. Children&apos;s Privacy</h2>
            <p className="leading-relaxed text-slate-700">
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us and we will take steps to delete it.
            </p>
          </section>

          <section id="updates" className="mb-10 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">10. Updates to This Policy</h2>
            <p className="leading-relaxed text-slate-700">
              We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance of the updated policy. We encourage you to review this page periodically.
            </p>
          </section>

          <section id="contact" className="mb-12 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">11. Contact Us</h2>
            <p className="mb-4 leading-relaxed text-slate-700">For questions about this Privacy Policy or to exercise your rights, contact us:</p>
            <ul className="list-none space-y-1 text-slate-700">
              <li><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-900 underline underline-offset-2 hover:no-underline">{CONTACT_EMAIL}</a></li>
              <li><strong>Phone:</strong> <a href={`tel:${CONTACT_PHONE}`} className="text-slate-900 underline underline-offset-2 hover:no-underline">{CONTACT_PHONE}</a></li>
              <li><strong>Address:</strong> {CONTACT_ADDRESS}</li>
            </ul>
          </section>

          <footer className="border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
            © {currentYear} {COMPANY_NAME}. All rights reserved.
          </footer>
        </main>

        <aside aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-24 rounded-lg border border-slate-200/80 bg-white/80 p-4 shadow-sm">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">On this page</h3>
            <nav className="flex flex-col gap-1">
              {TOC_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
