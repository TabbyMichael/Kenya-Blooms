export function PrivacyPolicy() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-neutral-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            Last updated: March 20, 2024
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Information We Collect</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            We collect information that you provide directly to us, including when you create an account, 
            make a purchase, sign up for our newsletter, or contact us for support.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-neutral-600 mb-6">
            <li className="mb-2">Process your orders and payments</li>
            <li className="mb-2">Send order confirmations and updates</li>
            <li className="mb-2">Provide customer support</li>
            <li className="mb-2">Send marketing communications (with your consent)</li>
            <li>Improve our services and website functionality</li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Data Security</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Your Rights</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            You have the right to access, correct, or delete your personal information. You can also 
            object to processing and request data portability.
          </p>
        </div>
      </div>
    </main>
  );
}