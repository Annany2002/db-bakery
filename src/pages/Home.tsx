
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Database, Shield, Clock, Server, ArrowRight, Check, ChevronRight, Globe, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import { useAuth } from '../contexts/AuthContext';

// Custom hook for animations when element comes into view
const useAnimateInView = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  return { ref, controls, isInView };
};

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const heroAnimation = useAnimateInView();
  const featuresAnimation = useAnimateInView();
  const benefitsAnimation = useAnimateInView();
  const ctaAnimation = useAnimateInView();
  
  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Nav */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Logo animated={true} size="md" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <Button asChild variant="outline" size="sm" className="ml-4">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/register">Sign Up</Link>
            </Button>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <Button asChild size="sm" variant="outline">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="container px-4">
          <motion.div
            ref={heroAnimation.ref}
            initial="hidden"
            animate={heroAnimation.controls}
            variants={staggerChildren}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 space-y-6">
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Secure & Reliable<br />Database Backup Solution
              </motion.h1>
              <motion.p 
                variants={fadeIn}
                className="text-xl text-muted-foreground"
              >
                Automate your database backups with our robust, enterprise-grade solution. 
                Support for all major database systems.
              </motion.p>
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button asChild size="lg" className="gap-2 group">
                  <Link to="/register">
                    Get Started
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#features">Learn More</a>
                </Button>
              </motion.div>
            </div>
            <motion.div 
              variants={fadeIn}
              className="flex-1 flex justify-center"
            >
              <div className="relative w-full max-w-lg aspect-video">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl"></div>
                <motion.div 
                  className="absolute inset-0 rounded-xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://placehold.co/600x400/e2e8f0/475569?text=Database+Backup" 
                    alt="Database Backup Platform" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </motion.div>
                <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-primary/5 rounded-full filter blur-3xl"></div>
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-muted-foreground">Trusted by companies worldwide</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => (
              <div key={index} className="text-xl font-bold text-muted-foreground/60">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container px-4">
          <motion.div 
            ref={featuresAnimation.ref}
            initial="hidden"
            animate={featuresAnimation.controls}
            variants={staggerChildren}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">Comprehensive Backup Features</motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
              Our platform provides all the tools you need to protect your valuable database assets
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={featuresAnimation.controls}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Database className="h-6 w-6 text-primary" />,
                title: "Multi-Database Support",
                description: "PostgreSQL, MySQL, MongoDB, SQLite, and more. We support all major database systems."
              },
              {
                icon: <Clock className="h-6 w-6 text-primary" />,
                title: "Automated Scheduling",
                description: "Set it and forget it. Schedule backups at intervals that work for your business."
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Enterprise Security",
                description: "End-to-end encryption ensures your data remains secure throughout the backup process."
              },
              {
                icon: <Server className="h-6 w-6 text-primary" />,
                title: "Smart Storage",
                description: "Efficient storage usage with incremental backups and intelligent compression."
              },
              {
                icon: <Globe className="h-6 w-6 text-primary" />,
                title: "Cloud Integration",
                description: "Store backups on AWS, Google Cloud, Azure, or your preferred cloud provider."
              },
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Developer API",
                description: "Integrate with your own tools via our comprehensive API documentation."
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="border-border/50 h-full transition-all hover:shadow-md hover:border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container px-4">
          <motion.div 
            ref={benefitsAnimation.ref}
            initial="hidden"
            animate={benefitsAnimation.controls}
            variants={staggerChildren}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">Why Choose DB Backup</motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
              Our solution offers unparalleled benefits for businesses of all sizes
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              variants={staggerChildren}
              initial="hidden"
              animate={benefitsAnimation.controls}
              className="space-y-8"
            >
              {[
                {
                  icon: <Server />,
                  title: "Disaster Recovery",
                  description: "Quickly restore your database to any point in time with just a few clicks."
                },
                {
                  icon: <Clock />,
                  title: "Time Efficiency",
                  description: "Save hours of manual work with automatic, scheduled backups."
                },
                {
                  icon: <Shield />,
                  title: "Data Protection",
                  description: "Ensure your valuable data is always protected against loss or corruption."
                }
              ].map((benefit, index) => (
                <motion.div key={index} variants={fadeIn} className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-5 w-5 text-primary">{benefit.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate={benefitsAnimation.controls}
              className="bg-card p-8 rounded-xl shadow-sm border border-border/50"
            >
              <h3 className="text-xl font-bold mb-6">Enterprise-Ready Solution</h3>
              <div className="space-y-4">
                {[
                  "Incremental, differential, and full backups",
                  "Cloud and local storage options",
                  "Comprehensive backup validation",
                  "Email and Slack notifications",
                  "Detailed logging and reporting",
                  "Role-based access control",
                  "Compliance with data regulations",
                  "24/7 monitoring and alerts"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-green-600" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "Perfect for small projects",
                features: [
                  "5 database connections",
                  "Daily backups",
                  "7 day retention",
                  "Email notifications",
                  "Basic support"
                ]
              },
              {
                name: "Professional",
                price: "$79",
                description: "Ideal for growing businesses",
                features: [
                  "20 database connections",
                  "Hourly backups",
                  "30 day retention",
                  "Email & Slack notifications",
                  "Priority support",
                  "Advanced reporting"
                ],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large scale operations",
                features: [
                  "Unlimited connections",
                  "Custom backup schedules",
                  "Custom retention policies",
                  "Advanced integrations",
                  "Dedicated support",
                  "Custom SLAs",
                  "On-premise option"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`border ${plan.highlighted ? "border-primary shadow-md" : "border-border/50"} overflow-hidden`}>
                {plan.highlighted && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className={`pt-6 ${plan.highlighted ? "pb-8" : "pb-6"}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="mt-4 mb-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full gap-1" 
                    variant={plan.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/register">
                      Get Started <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by businesses around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "DB Backup saved us countless hours of manual work. The scheduling feature is a game changer for our team.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp"
              },
              {
                quote: "After a server crash, we were able to restore our entire database in minutes. I can't recommend this service enough.",
                author: "Michael Chen",
                role: "Database Administrator, Retail Giant"
              },
              {
                quote: "The peace of mind that comes with knowing our data is safely backed up is invaluable. The interface is intuitive and powerful.",
                author: "Emma Rodriguez",
                role: "IT Director, Healthcare Solutions"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 text-4xl text-primary/40">"</div>
                    <p className="text-muted-foreground flex-grow">{testimonial.quote}</p>
                    <div className="mt-6">
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container px-4">
          <motion.div 
            ref={ctaAnimation.ref}
            initial="hidden"
            animate={ctaAnimation.controls}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center space-y-6 bg-card p-10 rounded-xl border border-border/50 shadow-sm"
          >
            <h2 className="text-3xl font-bold">Ready to secure your data?</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of companies that trust DB Backup for their mission-critical data.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/register">Create Your Account</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/login">Existing Customer? Login</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/40">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Logo size="sm" />
              <span className="text-lg font-medium">DB Backup</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DB Backup. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
