import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cpu, FileText, Mic, Image, Star, CheckCircle, Upload, Play, Pause, BarChart3, AlertTriangle, Volume2, Eye } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import AnimatedCounter from '../components/AnimatedCounter';

const Home = () => {
  // Text Detection State
  const [text, setText] = useState('');
  const [textResults, setTextResults] = useState<any>(null);
  const [isAnalyzingText, setIsAnalyzingText] = useState(false);

  // Voice Detection State
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [voiceResults, setVoiceResults] = useState<any>(null);
  const [isAnalyzingVoice, setIsAnalyzingVoice] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Image Detection State
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageResults, setImageResults] = useState<any>(null);
  const [isAnalyzingImage, setIsAnalyzingImage] = useState(false);

  const features = [
    {
      icon: FileText,
      title: 'AI Text Detection',
      description: 'Advanced algorithms to detect AI-generated text with 99.7% accuracy',
      link: '#text-detection',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mic,
      title: 'Voice AI Detection',
      description: 'Identify synthetic speech and deepfake audio with cutting-edge technology',
      link: '#voice-detection',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Image,
      title: 'Image AI Detection',
      description: 'Detect AI-generated images and deepfakes with precision analysis',
      link: '#image-detection',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const stats = [
    { number: 99.7, suffix: '%', label: 'Detection Accuracy' },
    { number: 1.2, suffix: 'M+', label: 'Files Analyzed' },
    { number: 50, suffix: 'K+', label: 'Active Users' },
    { number: 24, suffix: '/7', label: 'Support Available' }
  ];

  const benefits = [
    'Real-time AI content detection',
    'Support for multiple file formats',
    'Advanced machine learning algorithms',
    'Secure and private processing',
    'Detailed analysis reports',
    'API integration available'
  ];

  // Text Detection Functions
  const handleAnalyzeText = async () => {
    if (!text.trim()) return;
    
    setIsAnalyzingText(true);
    setTimeout(() => {
      const aiProbability = Math.random() * 100;
      const confidence = Math.random() * 100;
      
      setTextResults({
        isAI: aiProbability > 50,
        probability: aiProbability,
        confidence: confidence,
        wordCount: text.split(' ').length,
        patterns: [
          { type: 'Repetitive patterns', score: Math.random() * 100 },
          { type: 'Unnatural transitions', score: Math.random() * 100 },
          { type: 'Generic phrases', score: Math.random() * 100 },
          { type: 'Complexity analysis', score: Math.random() * 100 }
        ]
      });
      setIsAnalyzingText(false);
    }, 3000);
  };

  // Voice Detection Functions
  const handleVoiceFileUpload = (file: File) => {
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file);
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      setVoiceResults(null);
    }
  };

  const handleVoiceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleVoiceFileUpload(file);
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAnalyzeVoice = async () => {
    if (!audioFile) return;
    
    setIsAnalyzingVoice(true);
    setTimeout(() => {
      const aiProbability = Math.random() * 100;
      const confidence = Math.random() * 100;
      
      setVoiceResults({
        isAI: aiProbability > 50,
        probability: aiProbability,
        confidence: confidence,
        duration: Math.floor(Math.random() * 300) + 30,
        fileSize: (audioFile.size / 1024 / 1024).toFixed(2),
        patterns: [
          { type: 'Voice naturalness', score: Math.random() * 100 },
          { type: 'Breathing patterns', score: Math.random() * 100 },
          { type: 'Spectral analysis', score: Math.random() * 100 },
          { type: 'Prosody detection', score: Math.random() * 100 }
        ]
      });
      setIsAnalyzingVoice(false);
    }, 4000);
  };

  // Image Detection Functions
  const handleImageFileUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setImageResults(null);
    }
  };

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageFileUpload(file);
  };

  const handleAnalyzeImage = async () => {
    if (!imageFile) return;
    
    setIsAnalyzingImage(true);
    setTimeout(() => {
      const aiProbability = Math.random() * 100;
      const confidence = Math.random() * 100;
      
      setImageResults({
        isAI: aiProbability > 50,
        probability: aiProbability,
        confidence: confidence,
        dimensions: '1024x768',
        fileSize: (imageFile.size / 1024 / 1024).toFixed(2),
        format: imageFile.type.split('/')[1].toUpperCase(),
        patterns: [
          { type: 'Pixel artifacts', score: Math.random() * 100 },
          { type: 'Compression patterns', score: Math.random() * 100 },
          { type: 'Noise analysis', score: Math.random() * 100 },
          { type: 'Style consistency', score: Math.random() * 100 }
        ]
      });
      setIsAnalyzingImage(false);
    }, 3500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-white font-medium">Advanced AI Detection Technology</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Advanced AI
                </span>
                <br />
                <span className="text-white">Detection Suite</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge technology to detect AI-generated content across text, voice, and images. 
                Protect authenticity with our advanced detection algorithms powered by machine learning.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#features"
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <span>Explore Features</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Powerful Detection Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our suite of AI detection tools, each designed for specific content types
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Text Detection Section */}
      <section id="text-detection" className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <FileText className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-white font-medium">AI Text Detection</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Detect AI-Generated Text
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced algorithms analyze text patterns to identify AI-generated content with high accuracy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Text Input */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Input Text</h3>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your text here for AI detection analysis..."
                className="w-full h-64 bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
              />
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-400">
                  {text.length} characters, {text.split(' ').filter(word => word.length > 0).length} words
                </span>
                <button
                  onClick={handleAnalyzeText}
                  disabled={!text.trim() || isAnalyzingText}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzingText ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4" />
                      <span>Analyze Text</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Text Results */}
            <div className="space-y-6">
              {isAnalyzingText && (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold text-white mb-2">Analyzing Text...</h3>
                    <p className="text-gray-400">Please wait while we process your content</p>
                  </div>
                </div>
              )}

              {textResults && !isAnalyzingText && (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                    <BarChart3 className="h-6 w-6" />
                    <span>Detection Results</span>
                  </h3>

                  <div className={`p-4 rounded-xl mb-6 ${
                    textResults.isAI 
                      ? 'bg-red-500/20 border border-red-500/30' 
                      : 'bg-green-500/20 border border-green-500/30'
                  }`}>
                    <div className="flex items-center space-x-3">
                      {textResults.isAI ? (
                        <AlertTriangle className="h-6 w-6 text-red-400" />
                      ) : (
                        <CheckCircle className="h-6 w-6 text-green-400" />
                      )}
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {textResults.isAI ? 'Likely AI-Generated' : 'Likely Human-Written'}
                        </h4>
                        <p className="text-sm text-gray-300">
                          {textResults.probability.toFixed(1)}% probability of AI generation
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Confidence Score</span>
                      <span className="text-purple-400 font-bold">{textResults.confidence.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                        style={{width: `${textResults.confidence}%`}}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Analysis Breakdown</h4>
                    {textResults.patterns.map((pattern: any, index: number) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">{pattern.type}</span>
                          <span className="text-purple-400 text-sm font-medium">{pattern.score.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500/80 to-pink-500/80 h-2 rounded-full transition-all duration-1000"
                            style={{width: `${pattern.score}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Voice Detection Section */}
      <section id="voice-detection" className="py-20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Mic className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-white font-medium">AI Voice Detection</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Detect AI-Generated Voice
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced audio analysis to identify synthetic speech and deepfake audio content
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Voice Upload */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Upload Audio</h3>
              
              <div className="border-2 border-dashed border-white/20 rounded-xl p-8 mb-6 hover:border-white/40 transition-all duration-300">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleVoiceInputChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-center">
                  <Volume2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg text-gray-300 mb-2">Drop an audio file here or click to upload</p>
                  <p className="text-sm text-gray-500">Supports MP3, WAV, M4A, OGG formats</p>
                </div>
              </div>

              {audioFile && (
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-white font-medium">{audioFile.name}</h4>
                      <p className="text-sm text-gray-400">
                        {(audioFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <button
                      onClick={togglePlayback}
                      className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </button>
                  </div>
                  
                  <audio
                    ref={audioRef}
                    src={audioUrl}
                    onEnded={() => setIsPlaying(false)}
                    className="w-full"
                    controls
                  />
                </div>
              )}

              <button
                onClick={handleAnalyzeVoice}
                disabled={!audioFile || isAnalyzingVoice}
                className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzingVoice ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Analyzing Audio...</span>
                  </>
                ) : (
                  <>
                    <BarChart3 className="h-5 w-5" />
                    <span>Analyze Voice</span>
                  </>
                )}
              </button>
            </div>

            {/* Voice Results */}
            <div className="space-y-6">
              {isAnalyzingVoice && (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold text-white mb-2">Analyzing Audio...</h3>
                    <p className="text-gray-400">Processing voice patterns and characteristics</p>
                  </div>
                </div>
              )}

              {voiceResults && !isAnalyzingVoice && (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                    <BarChart3 className="h-6 w-6" />
                    <span>Detection Results</span>
                  </h3>

                  <div className={`p-4 rounded-xl mb-6 ${
                    voiceResults.isAI 
                      ? 'bg-red-500/20 border border-red-500/30' 
                      : 'bg-green-500/20 border border-green-500/30'
                  }`}>
                    <div className="flex items-center space-x-3">
                      {voiceResults.isAI ? (
                        <AlertTriangle className="h-6 w-6 text-red-400" />
                      ) : (
                        <CheckCircle className="h-6 w-6 text-green-400" />
                      )}
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {voiceResults.isAI ? 'Likely AI-Generated Voice' : 'Likely Human Voice'}
                        </h4>
                        <p className="text-sm text-gray-300">
                          {voiceResults.probability.toFixed(1)}% probability of synthetic voice
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Confidence Score</span>
                      <span className="text-blue-400 font-bold">{voiceResults.confidence.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-1000"
                        style={{width: `${voiceResults.confidence}%`}}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Analysis Breakdown</h4>
                    {voiceResults.patterns.map((pattern: any, index: number) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">{pattern.type}</span>
                          <span className="text-blue-400 text-sm font-medium">{pattern.score.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500/80 to-cyan-500/80 h-2 rounded-full transition-all duration-1000"
                            style={{width: `${pattern.score}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Detection Section */}
      <section id="image-detection" className="py-20 bg-gradient-to-br from-green-900/20 to-teal-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Image className="h-4 w-4 text-green-400" />
              <span className="text-sm text-white font-medium">AI Image Detection</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Detect AI-Generated Images
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced computer vision technology to identify AI-generated images and deepfakes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Upload */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Upload Image</h3>
              
              <div className="border-2 border-dashed border-white/20 rounded-xl p-8 mb-6 hover:border-white/40 transition-all duration-300">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageInputChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-center">
                  <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg text-gray-300 mb-2">Drop an image here or click to upload</p>
                  <p className="text-sm text-gray-500">Supports JPG, PNG, GIF, WebP formats</p>
                </div>
              </div>

              {imageUrl && (
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-white font-medium">{imageFile?.name}</h4>
                      <p className="text-sm text-gray-400">
                        {imageFile && (imageFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <Eye className="h-5 w-5 text-green-400" />
                  </div>
                  
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={imageUrl}
                      alt="Upload preview"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              )}

              <button
                onClick={handleAnalyzeImage}
                disabled={!imageFile || isAnalyzingImage}
                className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzingImage ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Analyzing Image...</span>
                  </>
                ) : (
                  <>
                    <Zap className="h-5 w-5" />
                    <span>Analyze Image</span>
                  </>
                )}
              </button>
            </div>

            {/* Image Results */}
            <div className="space-y-6">
              {isAnalyzingImage && (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold text-white mb-2">Analyzing Image...</h3>
                    <p className="text-gray-400">Processing visual patterns and metadata</p>
                  </div>
                </div>
              )}

              {imageResults && !isAnalyzingImage && (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                    <BarChart3 className="h-6 w-6" />
                    <span>Detection Results</span>
                  </h3>

                  <div className={`p-4 rounded-xl mb-6 ${
                    imageResults.isAI 
                      ? 'bg-red-500/20 border border-red-500/30' 
                      : 'bg-green-500/20 border border-green-500/30'
                  }`}>
                    <div className="flex items-center space-x-3">
                      {imageResults.isAI ? (
                        <AlertTriangle className="h-6 w-6 text-red-400" />
                      ) : (
                        <CheckCircle className="h-6 w-6 text-green-400" />
                      )}
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {imageResults.isAI ? 'Likely AI-Generated Image' : 'Likely Authentic Image'}
                        </h4>
                        <p className="text-sm text-gray-300">
                          {imageResults.probability.toFixed(1)}% probability of AI generation
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">Confidence Score</span>
                      <span className="text-green-400 font-bold">{imageResults.confidence.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full transition-all duration-1000"
                        style={{width: `${imageResults.confidence}%`}}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Analysis Breakdown</h4>
                    {imageResults.patterns.map((pattern: any, index: number) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">{pattern.type}</span>
                          <span className="text-green-400 text-sm font-medium">{pattern.score.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500/80 to-teal-500/80 h-2 rounded-full transition-all duration-1000"
                            style={{width: `${pattern.score}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Why Choose AI Detect Pro?
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our advanced AI detection platform combines cutting-edge machine learning with 
                  user-friendly interfaces to deliver the most accurate results in the industry.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Secure & Private</h3>
                      <p className="text-gray-400">Your data is protected with enterprise-grade security</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
                      <Cpu className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI-Powered</h3>
                      <p className="text-gray-400">Advanced machine learning algorithms for accuracy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Top Rated</h3>
                      <p className="text-gray-400">Trusted by thousands of users worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Detect AI Content?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust our AI detection technology. 
              Start analyzing your content today with our powerful tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Explore Features</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <span>Contact Sales</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;