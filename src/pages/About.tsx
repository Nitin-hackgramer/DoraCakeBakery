
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import teamImage from "../assets/team-image.jpg";
import bakeryInterior from "../assets/bakery-interior.jpg";
import bakingProcess from "../assets/baking-process.jpg";

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
      name: "Emma Wilson",
      role: "Head Baker & Founder",
      bio: "Emma started baking alongside her grandmother at age 8 and turned her passion into Sweet Crumbs after culinary school.",
      image: "/src/assets/team-1.jpg",
    },
    {
      name: "David Chen",
      role: "Pastry Chef",
      bio: "With 15 years of experience in fine dining restaurants, David brings artistry and precision to our pastry selection.",
      image: "/src/assets/team-2.jpg",
    },
    {
      name: "Sophie Miller",
      role: "Bread Specialist",
      bio: "Sophie studied traditional bread-making techniques across Europe before joining our team to create our artisanal breads.",
      image: "/src/assets/team-3.jpg",
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
              From humble beginnings to a beloved community bakery, discover the heart behind Sweet Crumbs.
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
                  src={bakeryInterior}
                  alt="Sweet Crumbs Bakery Interior"
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div>
                <h2 className="font-playfair text-3xl font-bold text-bakery-brown mb-6">
                  How It All Started
                </h2>
                <div className="space-y-4 text-bakery-brown/80">
                  <p>
                    Sweet Crumbs Bakery began in 2010 with a simple dream and a family recipe book. Our founder, Emma Wilson, transformed her grandmother's kitchen traditions into a small bakery that quickly became a neighborhood favorite.
                  </p>
                  <p>
                    What started with just three signature items has grown into a comprehensive menu of delicious baked goods that honor traditional techniques while embracing innovative flavors.
                  </p>
                  <p>
                    Our little corner shop has expanded over the years, but our commitment to quality and community has remained unchanged. Every morning, our team arrives before dawn to prepare fresh batches of bread, pastries, and cakes for our customers.
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
                These core principles guide everything we do at Sweet Crumbs Bakery.
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
            <ScrollReveal delay={300} className="order-2 md:order-1">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-bakery-brown mb-6">
                  Our Baking Process
                </h2>
                <div className="space-y-4 text-bakery-brown/80">
                  <p>
                    At Sweet Crumbs, we believe that exceptional baked goods require time, care, and the best ingredients. Our process begins with selecting premium flours, organic dairy, and locally sourced fruits.
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

            <ScrollReveal className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={bakingProcess}
                  alt="Our baking process"
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
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

          <ScrollReveal>
            <div className="text-center">
              <img
                src={teamImage}
                alt="Our full bakery team"
                className="w-full max-w-3xl h-auto mx-auto rounded-lg shadow-xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
