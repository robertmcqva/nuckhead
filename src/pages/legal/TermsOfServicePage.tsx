import React from 'react'
import { Link } from 'react-router-dom'
import { Scale, Calendar, Mail, Phone, AlertTriangle, ArrowLeft } from 'lucide-react'

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Navigation Back */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/legal/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-brand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-brand-50 border border-brand-200 rounded-full text-brand-700 text-sm font-medium mb-8">
            <Scale className="w-4 h-4 mr-2" />
            Legal Agreement
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gray-900">Terms of</span>{" "}
            <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">Service</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            The legal terms and conditions for using MccHub Leximius
          </p>
          
          <div className="flex items-center justify-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            Last updated: October 3, 2025
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-12">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">Important Notice</h3>
                  <p className="text-orange-800 leading-relaxed">
                    By accessing or using MccHub Leximius, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These Terms of Service ("Terms") govern your use of the MccHub Leximius website, component library, and related services (collectively, the "Service") operated by MccHub Leximius ("we," "us," or "our"). By accessing or using our Service, you agree to comply with and be bound by these Terms.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you do not agree to these Terms, please do not use our Service. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                MccHub Leximius provides a comprehensive React component library, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Pre-built React components and design systems</li>
                <li>Documentation and usage guides</li>
                <li>Code examples and interactive playground</li>
                <li>TypeScript type definitions</li>
                <li>Development tools and utilities</li>
                <li>Support and maintenance updates</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Accounts</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Creation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To access certain features, you may need to create an account. You agree to provide accurate, current, and complete information and to update such information to keep it accurate, current, and complete.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Acceptable Use</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the intellectual property rights of others</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use the Service for any commercial purpose without authorization</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Content</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Service and its original content, features, and functionality are owned by MccHub Leximius and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Component License</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our components are provided under specific license terms that vary by subscription plan. Please refer to your license agreement for specific usage rights and restrictions.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Content</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You retain ownership of any content you submit, post, or display on or through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, publish, transmit, and display such content.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Payment and Billing</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscription Fees</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access to certain features requires a paid subscription. Subscription fees are billed in advance on a monthly or annual basis and are non-refundable except as expressly stated in these Terms.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Processing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Payments are processed by third-party payment processors. By providing payment information, you authorize us to charge the applicable fees to your chosen payment method.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cancellation and Refunds</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You may cancel your subscription at any time. Cancellations take effect at the end of the current billing cycle. Refunds are provided in accordance with our refund policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Privacy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Disclaimers</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Accuracy, completeness, or reliability of content</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Security of data transmission</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To the fullest extent permitted by applicable law, MccHub Leximius shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of the Service.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our total liability for any claims arising from these Terms or your use of the Service shall not exceed the amount paid by you for the Service in the twelve months preceding the claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Indemnification</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You agree to indemnify, defend, and hold harmless MccHub Leximius and its officers, directors, employees, and agents from any claims, damages, losses, costs, and expenses arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Termination</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Governing Law</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. Any disputes arising from these Terms shall be resolved in the courts of California.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-brand-600 mr-3" />
                  <span className="text-gray-600">legal@mcchub.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-brand-600 mr-3" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}