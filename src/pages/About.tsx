
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutPage = () => {
  const values = [
    {
      title: "Quality Ingredients",
      description: "We source the finest local and organic ingredients to ensure our baked goods taste exceptional.",
      icon: "🌾",
    },
    {
      title: "Handcrafted With Love",
      description: "Each item is carefully made by our skilled bakers with attention to every detail.",
      icon: "❤️",
    },
    {
      title: "Community First",
      description: "We believe in supporting local farmers and giving back to the community that supports us.",
      icon: "🏡",
    },
    {
      title: "Sustainable Practices",
      description: "We strive to minimize waste and use eco-friendly packaging whenever possible.",
      icon: "🌱",
    },
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Head Baker & Founder",
      bio: "Priya learned traditional Indian and fusion baking from her mother and grandmother, turning her heritage recipes into DoraCake after her culinary training.",
      image: "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?q=80&w=1972&auto=format&fit=crop",
    },
    {
      name: "Arun Patel",
      role: "Pastry Chef",
      bio: "With 15 years of experience in premium bakeries across Mumbai and Delhi, Arun brings traditional Indian flavors to our pastry collection.",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2069&auto=format&fit=crop",
    },
    {
      name: "Muskan Gupta",
      role: "Bread Specialist",
      bio: "Meera combines traditional Indian bread-making techniques with modern artisanal methods to create our unique bread selection.",
      image: "https://images.unsplash.com/photo-1614436163996-25cee5f54290?q=80&w=2042&auto=format&fit=crop",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-bakery-cream">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bakery-brown mb-6">
              Our Story
            </h1>
            <p className="text-bakery-brown/80 max-w-2xl mx-auto">
              From humble beginnings to a beloved community bakery, discover the heart behind DoraCake.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop"
                  alt="Humble beginnings of DoraCake Bakery"
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl font-bold text-bakery-brown">
                  How It All Started
                </h2>
                
                <div className="text-bakery-brown/80 space-y-4">
                  <p>
                    DoraCake Bakery began in 2018 with a cherished collection of family recipes passed down through generations. Our founder, Priya Sharma, blended her grandmother's traditional Indian baking wisdom with modern techniques learned during her culinary training.
                  </p>
                  <p>
                    Starting with just a few signature items like our famous eggless cakes and Osmania biscuits, we've grown to offer a delightful fusion of Indian and international baked delicacies that celebrate our rich culinary heritage.
                  </p>
                  <p>
                    From our modest start in a small kitchen in Mumbai to becoming a beloved neighborhood bakery, we've grown while keeping our core values intact. Each day begins before sunrise as our dedicated team prepares fresh breads, pastries, and our signature Indian-inspired treats for our cherished customers.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-bakery-cream/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold text-bakery-brown mb-4">
                Our Values
              </h2>
              <p className="text-bakery-brown/80 max-w-2xl mx-auto">
                These core principles guide everything we do at DoraCake Bakery.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 150}>
                <div className="bg-white p-6 rounded-lg shadow-md text-center h-full flex flex-col">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-playfair text-xl font-semibold text-bakery-brown mb-3">
                    {value.title}
                  </h3>
                  <p className="text-bakery-brown/80 flex-grow">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Baking Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <ScrollReveal>
                <div>
                  <h2 className="font-playfair text-3xl font-bold text-bakery-brown mb-6">
                    Our Baking Process
                  </h2>
                  <div className="space-y-4 text-bakery-brown/80">
                    <p>
                      At DoraCake, we believe that exceptional baked goods require time, care, and the best ingredients. Our process begins with selecting premium flours, organic dairy, and locally sourced fruits.
                    </p>
                    <p>
                      We mix our doughs and batters by hand, paying careful attention to texture and consistency. Many of our breads and pastries undergo long fermentation periods to develop complex flavors and perfect textures.
                    </p>
                    <p>
                      Our bakers work through the night and early morning hours to ensure everything is fresh for our customers each day. We never use artificial preservatives, which means what you taste is pure, authentic flavor.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="order-1 md:order-2">
              <ScrollReveal>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1695028377414-5b95d286595d?q=80&w=2070&auto=format&fit=crop"
                    alt="Our baking process details"
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-bakery-cream/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold text-bakery-brown mb-4">
                Meet Our Team
              </h2>
              <p className="text-bakery-brown/80 max-w-2xl mx-auto">
                The talented people behind your favorite baked goods.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-bakery-brown">
                      {member.name}
                    </h3>
                    <p className="text-bakery-pink font-medium mb-3">{member.role}</p>
                    <p className="text-bakery-brown/80">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <ScrollReveal>
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1267&auto=format&fit=crop"
                alt="Our full bakery team"
                className="w-full max-w-3xl h-auto mx-auto rounded-lg shadow-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
