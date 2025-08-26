import { useTranslations } from 'next-intl';
import { 
  Brain, 
  BarChart3, 
  Settings, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  Database,
  Cpu
} from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function HomePage() {
  const t = useTranslations();

  const stats = [
    { number: '50+', label: t('about.stats.projects') },
    { number: '15+', label: t('about.stats.clients') },
    { number: '99%', label: t('about.stats.accuracy') },
  ];

  const techStack = [
    'Python', 'TensorFlow', 'PyTorch', 'OpenAI',
    'AWS', 'GCP', 'Docker', 'Kubernetes'
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t('hero.titleAccent')}
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  {t('hero.cta.services')}
                </a>
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  {t('hero.cta.contact')}
                </a>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <Brain className="w-8 h-8 text-blue-600 mb-3" />
                      <h3 className="font-semibold text-gray-900">{t('hero.cards.generativeAI')}</h3>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <Database className="w-8 h-8 text-green-600 mb-3" />
                      <h3 className="font-semibold text-gray-900">{t('hero.cards.bigData')}</h3>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <Cpu className="w-8 h-8 text-purple-600 mb-3" />
                      <h3 className="font-semibold text-gray-900">{t('hero.cards.machineLearning')}</h3>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <BarChart3 className="w-8 h-8 text-orange-600 mb-3" />
                      <h3 className="font-semibold text-gray-900">{t('hero.cards.analytics')}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {t('services.title')}
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Generative AI */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
                <h3 className="ml-3 text-2xl font-bold text-gray-900">
                  {t('services.generativeAI.title')}
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                {t('services.generativeAI.description')}
              </p>
              <ul className="space-y-2">
                {(t.raw('services.generativeAI.features') as string[]).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Science */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
                <h3 className="ml-3 text-2xl font-bold text-gray-900">
                  {t('services.dataScience.title')}
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                {t('services.dataScience.description')}
              </p>
              <ul className="space-y-2">
                {(t.raw('services.dataScience.features') as string[]).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Engineering */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-orange-600" />
                <h3 className="ml-3 text-2xl font-bold text-gray-900">
                  {t('services.dataEngineering.title')}
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                {t('services.dataEngineering.description')}
              </p>
              <ul className="space-y-2">
                {(t.raw('services.dataEngineering.features') as string[]).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Machine Learning */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-purple-600" />
                <h3 className="ml-3 text-2xl font-bold text-gray-900">
                  {t('services.machineLearning.title')}
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                {t('services.machineLearning.description')}
              </p>
              <ul className="space-y-2">
                {(t.raw('services.machineLearning.features') as string[]).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t('about.title')}
              </h2>
              <p className="mt-6 text-xl text-gray-700 font-medium">
                {t('about.lead')}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="mt-8 grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t('about.techStack.title')}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {techStack.map((tech, index) => (
                    <div 
                      key={index}
                      className="bg-gray-100 px-4 py-2 rounded-lg text-center text-gray-800 font-medium"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {t('contact.title')}
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('contact.info.email')}
                  </h3>
                  <a 
                    href="mailto:info@aiudalabs.com" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    info@aiudalabs.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('contact.info.phone')}
                  </h3>
                  <a 
                    href="tel:+17863834947" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    +1 786-383-4947
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('contact.info.whatsapp')}
                  </h3>
                  <a 
                    href="https://wa.me/50763644604" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 transition-colors"
                  >
                    +507 6364-4604
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('contact.info.location')}
                  </h3>
                  <div className="text-gray-600">
                    <div>7901 4TH ST N STE 300</div>
                    <div>ST. PETERSBURG, FL 33702</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form 
              action="https://formspree.io/f/YOUR_FORM_ID" 
              method="POST"
              className="mt-12 lg:mt-0 space-y-6"
            >
              <input type="hidden" name="_to" value="info@aiudalabs.com" />
              <input type="hidden" name="_subject" value="New contact from Aiuda Labs website" />
              <input type="hidden" name="_next" value="https://aiudalabs.com/thank-you" />
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder={t('contact.form.company')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  name="message"
                  placeholder={t('contact.form.message')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/aiudalabs_white.png" 
                  alt="Aiuda Labs" 
                  width={48} 
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <span className="font-bold text-xl font-sans">Aiuda Labs</span>
              </div>
              <p className="text-gray-400 mb-6">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">{t('footer.servicesList.generativeAI')}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{t('footer.servicesList.dataScience')}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{t('footer.servicesList.dataEngineering')}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{t('footer.servicesList.machineLearning')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">{t('navigation.about')}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t('navigation.contact')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.careers')}</a></li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold mb-4">{t('footer.follow')}</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/aiudalabs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Aiuda Labs. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </>
  );
}