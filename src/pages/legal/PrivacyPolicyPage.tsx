import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, ArrowLeft, Calendar, Mail, Phone } from 'lucide-react'

export const PrivacyPolicyPage: React.FC = () => {
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
              <Link to="/legal/terms" className="text-gray-600 hover:text-gray-900 text-sm">
                Terms of Service
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
            <Shield className="w-4 h-4 mr-2" />
            Legal Information
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gray-900">Privacy</span>{" "}
            <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">Policy</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            How we collect, use, and protect your personal information
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
            <div className="bg-blue-50 border-l-4 border-brand-500 p-6 rounded-r-xl mb-12">
              <h3 className="text-lg font-semibold text-brand-900 mb-2">Your Privacy Matters</h3>
              <p className="text-brand-800 leading-relaxed">
                At MccHub Leximius, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Name and email address</li>
                <li>Account credentials</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage Information</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We automatically collect certain information about your use of our services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Device information and browser type</li>
                <li>IP address and location data</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Component usage patterns and preferences</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Communicate about products, services, and promotional offers</li>
                <li>Monitor and analyze usage patterns to improve user experience</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li><strong>Service Providers:</strong> Trusted third-party companies that help us provide our services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
                <li><strong>Consent:</strong> When you have given us explicit permission</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal data on a need-to-know basis</li>
                <li>Secure hosting infrastructure with industry-standard protections</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Access and update your personal information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Object to certain data processing activities</li>
                <li>File a complaint with relevant supervisory authorities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use cookies and similar technologies to enhance your experience and analyze usage patterns. You can manage cookie preferences through your browser settings, though some features may not function properly if cookies are disabled.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers, including standard contractual clauses and adequacy decisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We may update this privacy policy periodically to reflect changes in our practices or applicable laws. We will notify you of significant changes by email or through our service.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you have questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-brand-600 mr-3" />
                  <span className="text-gray-600">privacy@mcchub.com</span>
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