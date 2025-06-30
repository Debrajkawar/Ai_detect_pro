import React from 'react';
import { Shield, Zap, Users, Award, Target, Brain, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Technology',
      description: 'Cutting-edge machine learning algorithms trained on millions of samples for maximum accuracy.'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your data is processed securely with enterprise-grade encryption and never stored permanently.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Get instant results with our optimized detection algorithms that work in real-time.'
    },
    {
      icon: Globe,
      title: 'Multi-format Support',
      description: 'Support for text, audio, and image formats across all major file types and platforms.'
    }
  ];

  const stats = [
    { icon: Users, number: '50K+', label: 'Active Users' },
    { icon: Target, number: '99.7%', label: 'Accuracy Rate' },
    { icon: TrendingUp, number: '1.2M+', label: 'Files Analyzed' },
    { icon: Award, number: '24/7', label: 'Support Available' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Scientist',
      bio: 'PhD in Machine Learning from MIT, 10+ years in AI research',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Engineer',
      bio: 'Full-stack developer with expertise in scalable AI systems',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Elena Petrov',
      role: 'Data Scientist',
      bio: 'Specialist in deep learning and neural network architectures',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About AI Detect Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're pioneering the future of AI detection technology, providing advanced tools to distinguish 
            between human-created and AI-generated content across multiple media types.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  In an era where AI-generated content is becoming increasingly sophisticated, we believe in 
                  the importance of transparency and authenticity. Our mission is to provide reliable, 
                  accurate, and accessible tools that help users identify AI-generated content.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We're committed to staying ahead of the curve, continuously improving our detection 
                  algorithms as AI technology evolves, ensuring our users always have the most effective 
                  tools at their disposal.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                        <div className="p-3 bg-white/10 rounded-lg mb-3 mx-auto w-fit group-hover:bg-white/20 transition-colors duration-300">
                          <stat.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-white">{stat.number}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Why Choose Us</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with user-friendly design to deliver 
              the most accurate and reliable AI detection services available.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4 w-fit group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts combines deep technical knowledge with a passion for 
              innovation in AI detection technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-purple-500 to-blue-500 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section>
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Technology</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Built on the latest advances in machine learning and artificial intelligence, our detection 
                algorithms are continuously trained and updated to maintain the highest accuracy rates.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 w-fit mx-auto">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Neural Networks</h3>
                <p className="text-gray-300">Advanced deep learning models trained on diverse datasets</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4 w-fit mx-auto">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Analysis</h3>
                <p className="text-gray-300">Optimized algorithms for instant detection and processing</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mb-4 w-fit mx-auto">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300">Scalable, secure cloud processing for global accessibility</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;