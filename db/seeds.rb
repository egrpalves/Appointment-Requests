# db/seeds.rb
# Run with: rails db:seed

puts "Cleaning up old data..."
AppointmentRequest.destroy_all
Service.destroy_all
Nutritionist.destroy_all

# ─────────────────────────────────────────────
# NUTRITIONISTS
# ─────────────────────────────────────────────
puts "Seeding nutritionists..."

nutritionists_data = [
  {
    name: "Maria Silva",
    email: "maria.silva@nutrium-demo.com",
    specialty: "Sports Nutrition",
    bio: "Specialist in sports nutrition and performance optimisation with 10+ years experience working with amateur and elite athletes.",
    photo_url: "https://i.pravatar.cc/150?img=47",
    services: [
      { name: "First Consultation",   price: 60.0, location: "Braga",  duration_minutes: 60, lat: 41.5518, lng: -8.4229 },
      { name: "Follow-up Session",    price: 40.0, location: "Braga",  duration_minutes: 45, lat: 41.5518, lng: -8.4229 },
      { name: "Online Follow-up",     price: 30.0, location: "Online", duration_minutes: 30, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "João Ferreira",
    email: "joao.ferreira@nutrium-demo.com",
    specialty: "Clinical Nutrition",
    bio: "Clinical nutritionist focused on metabolic disorders and medically supervised weight management.",
    photo_url: "https://i.pravatar.cc/150?img=68",
    services: [
      { name: "First Consultation",    price: 75.0, location: "Porto",  duration_minutes: 60, lat: 41.1579, lng: -8.6291 },
      { name: "Weight Management",     price: 55.0, location: "Porto",  duration_minutes: 60, lat: 41.1579, lng: -8.6291 },
      { name: "Online Consultation",   price: 45.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Ana Rodrigues",
    email: "ana.rodrigues@nutrium-demo.com",
    specialty: "Pediatric Nutrition",
    bio: "Dedicated to children's health, Ana has helped hundreds of families build healthy eating habits from infancy to adolescence.",
    photo_url: "https://i.pravatar.cc/150?img=45",
    services: [
      { name: "Pediatric Consult",  price: 65.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
      { name: "Teen Nutrition",     price: 55.0, location: "Lisboa", duration_minutes: 45, lat: 38.7223, lng: -9.1393 },
      { name: "Online Pediatric",   price: 50.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Carlos Mendes",
    email: "carlos.mendes@nutrium-demo.com",
    specialty: "Dietetics & Wellness",
    bio: "Holistic approach to nutrition, integrating wellness and lifestyle coaching for sustainable long-term change.",
    photo_url: "https://i.pravatar.cc/150?img=12",
    services: [
      { name: "Wellness Consult",   price: 55.0, location: "Braga",  duration_minutes: 60, lat: 41.5465, lng: -8.4265 },
      { name: "Lifestyle Plan",     price: 80.0, location: "Braga",  duration_minutes: 90, lat: 41.5465, lng: -8.4265 },
      { name: "Online Session",     price: 35.0, location: "Online", duration_minutes: 30, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Sofia Costa",
    email: "sofia.costa@nutrium-demo.com",
    specialty: "Vegan & Plant-Based Nutrition",
    bio: "Passionate about plant-based eating and sustainable nutrition for long-term health and environmental impact.",
    photo_url: "https://i.pravatar.cc/150?img=49",
    services: [
      { name: "Plant-Based Consult",  price: 60.0, location: "Porto",  duration_minutes: 60, lat: 41.1496, lng: -8.6109 },
      { name: "Vegan Meal Planning",  price: 90.0, location: "Porto",  duration_minutes: 90, lat: 41.1496, lng: -8.6109 },
      { name: "Online Review",        price: 42.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Rui Oliveira",
    email: "rui.oliveira@nutrium-demo.com",
    specialty: "Oncology Nutrition",
    bio: "Supporting cancer patients through nutritional therapy and evidence-based care before, during, and after treatment.",
    photo_url: "https://i.pravatar.cc/150?img=15",
    services: [
      { name: "First Consultation",  price: 80.0, location: "Coimbra", duration_minutes: 60, lat: 40.2033, lng: -8.4103 },
      { name: "Follow-up",           price: 60.0, location: "Coimbra", duration_minutes: 45, lat: 40.2033, lng: -8.4103 },
      { name: "Online Support",      price: 50.0, location: "Online",  duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Beatriz Santos",
    email: "beatriz.santos@nutrium-demo.com",
    specialty: "Gut Health",
    bio: "Focused on digestive health, IBS, and microbiome balance through personalised elimination and reintroduction protocols.",
    photo_url: "https://i.pravatar.cc/150?img=32",
    services: [
      { name: "Digestive Health Consult", price: 70.0, location: "Porto",  duration_minutes: 60, lat: 41.1496, lng: -8.6109 },
      { name: "IBS Follow-up",            price: 50.0, location: "Porto",  duration_minutes: 45, lat: 41.1496, lng: -8.6109 },
      { name: "Online Consultation",      price: 40.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Tiago Martins",
    email: "tiago.martins@nutrium-demo.com",
    specialty: "Weight Loss",
    bio: "Helps clients achieve sustainable weight loss with practical, non-restrictive strategies rooted in behavioural science.",
    photo_url: "https://i.pravatar.cc/150?img=33",
    services: [
      { name: "Initial Assessment",  price: 65.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
      { name: "Fat Loss Program",    price: 75.0, location: "Lisboa", duration_minutes: 75, lat: 38.7223, lng: -9.1393 },
      { name: "Online Coaching",     price: 45.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Inês Carvalho",
    email: "ines.carvalho@nutrium-demo.com",
    specialty: "Hormonal Nutrition",
    bio: "Specialized in PCOS, thyroid health, and hormonal balance. Helps women reclaim energy and cycle health through food.",
    photo_url: "https://i.pravatar.cc/150?img=28",
    services: [
      { name: "Hormonal Consult",  price: 70.0, location: "Braga",  duration_minutes: 60, lat: 41.5454, lng: -8.4265 },
      { name: "PCOS Follow-up",    price: 55.0, location: "Braga",  duration_minutes: 45, lat: 41.5454, lng: -8.4265 },
      { name: "Online Session",    price: 45.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Miguel Teixeira",
    email: "miguel.teixeira@nutrium-demo.com",
    specialty: "Fitness Nutrition",
    bio: "Works with athletes and gym-goers to optimise body composition, improve recovery, and hit performance goals.",
    photo_url: "https://i.pravatar.cc/150?img=22",
    services: [
      { name: "Performance Consult",  price: 65.0, location: "Porto",  duration_minutes: 60, lat: 41.1579, lng: -8.6291 },
      { name: "Muscle Gain Plan",     price: 85.0, location: "Porto",  duration_minutes: 75, lat: 41.1579, lng: -8.6291 },
      { name: "Online Coaching",      price: 50.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Cláudia Ribeiro",
    email: "claudia.ribeiro@nutrium-demo.com",
    specialty: "Pregnancy Nutrition",
    bio: "Supports women through preconception, all trimesters, and postpartum recovery with evidence-based nutrition plans.",
    photo_url: "https://i.pravatar.cc/150?img=36",
    services: [
      { name: "Pregnancy Consult",     price: 75.0, location: "Coimbra", duration_minutes: 60, lat: 40.2033, lng: -8.4103 },
      { name: "Postpartum Follow-up",  price: 60.0, location: "Coimbra", duration_minutes: 45, lat: 40.2033, lng: -8.4103 },
      { name: "Online Support",        price: 50.0, location: "Online",  duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Pedro Gomes",
    email: "pedro.gomes@nutrium-demo.com",
    specialty: "Diabetes Nutrition",
    bio: "Expert in managing type 1 and type 2 diabetes through nutrition, carb literacy, and sustainable lifestyle changes.",
    photo_url: "https://i.pravatar.cc/150?img=14",
    services: [
      { name: "Diabetes Consult",  price: 80.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
      { name: "Glycemic Control",  price: 60.0, location: "Lisboa", duration_minutes: 45, lat: 38.7223, lng: -9.1393 },
      { name: "Online Follow-up",  price: 50.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Sara Almeida",
    email: "sara.almeida@nutrium-demo.com",
    specialty: "Sports Nutrition",
    bio: "Supports endurance and strength athletes with evidence-based fuelling strategies, from marathon prep to triathlon recovery.",
    photo_url: "https://i.pravatar.cc/150?img=41",
    services: [
      { name: "Race Prep Consult",         price: 68.0, location: "Porto",  duration_minutes: 60, lat: 41.1496, lng: -8.6109 },
      { name: "Recovery Plan",             price: 52.0, location: "Porto",  duration_minutes: 45, lat: 41.1496, lng: -8.6109 },
      { name: "Online Performance Review", price: 42.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Filipe Costa",
    email: "filipe.costa@nutrium-demo.com",
    specialty: "Clinical Nutrition",
    bio: "Helps patients manage cholesterol, hypertension, and metabolic syndrome with personalised dietary protocols.",
    photo_url: "https://i.pravatar.cc/150?img=18",
    services: [
      { name: "Clinical Assessment",   price: 72.0, location: "Braga",  duration_minutes: 60, lat: 41.5518, lng: -8.4229 },
      { name: "Metabolic Follow-up",   price: 58.0, location: "Braga",  duration_minutes: 45, lat: 41.5518, lng: -8.4229 },
      { name: "Online Care Plan",      price: 48.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Marta Fernandes",
    email: "marta.fernandes@nutrium-demo.com",
    specialty: "Pediatric Nutrition",
    bio: "Builds healthy, stress-free relationships with food for children, teens, and families navigating picky eating.",
    photo_url: "https://i.pravatar.cc/150?img=44",
    services: [
      { name: "Child Nutrition Consult",  price: 66.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
      { name: "Teen Growth Review",       price: 54.0, location: "Lisboa", duration_minutes: 45, lat: 38.7223, lng: -9.1393 },
      { name: "Online Family Session",    price: 44.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Ricardo Neves",
    email: "ricardo.neves@nutrium-demo.com",
    specialty: "Wellness Coaching",
    bio: "Combines nutrition with habit-building, sleep optimisation, and stress management for a whole-life approach.",
    photo_url: "https://i.pravatar.cc/150?img=25",
    services: [
      { name: "Wellness Consult",   price: 57.0, location: "Coimbra", duration_minutes: 60, lat: 40.2033, lng: -8.4103 },
      { name: "Habit Reset Plan",   price: 73.0, location: "Coimbra", duration_minutes: 75, lat: 40.2033, lng: -8.4103 },
      { name: "Online Check-in",    price: 37.0, location: "Online",  duration_minutes: 30, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Helena Pinto",
    email: "helena.pinto@nutrium-demo.com",
    specialty: "Vegan Nutrition",
    bio: "Designs balanced, nutrient-dense plant-based plans for health, sport, and environmental sustainability.",
    photo_url: "https://i.pravatar.cc/150?img=48",
    services: [
      { name: "Vegan Consult",              price: 62.0, location: "Porto",  duration_minutes: 60, lat: 41.1496, lng: -8.6109 },
      { name: "Meal Planning",              price: 88.0, location: "Porto",  duration_minutes: 90, lat: 41.1496, lng: -8.6109 },
      { name: "Online Plant-Based Review",  price: 46.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "André Sousa",
    email: "andre.sousa@nutrium-demo.com",
    specialty: "Oncology Nutrition",
    bio: "Provides compassionate nutritional support throughout diagnosis, active treatment, and long-term recovery.",
    photo_url: "https://i.pravatar.cc/150?img=19",
    services: [
      { name: "Oncology Consult",     price: 82.0, location: "Coimbra", duration_minutes: 60, lat: 40.2033, lng: -8.4103 },
      { name: "Symptom Management",   price: 64.0, location: "Coimbra", duration_minutes: 45, lat: 40.2033, lng: -8.4103 },
      { name: "Online Support",       price: 52.0, location: "Online",  duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Joana Monteiro",
    email: "joana.monteiro@nutrium-demo.com",
    specialty: "Digestive Health",
    bio: "Specializes in bloating, reflux, IBS, and food intolerances using low-FODMAP and gut-directed therapy.",
    photo_url: "https://i.pravatar.cc/150?img=29",
    services: [
      { name: "Digestive Review",           price: 69.0, location: "Braga",  duration_minutes: 60, lat: 41.5518, lng: -8.4229 },
      { name: "Food Intolerance Follow-up", price: 53.0, location: "Braga",  duration_minutes: 45, lat: 41.5518, lng: -8.4229 },
      { name: "Online Gut Check",           price: 43.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Nuno Correia",
    email: "nuno.correia@nutrium-demo.com",
    specialty: "Performance Nutrition",
    bio: "Works with runners, cyclists, football players, and triathlon athletes on race-day fuelling and periodisation.",
    photo_url: "https://i.pravatar.cc/150?img=50",
    services: [
      { name: "Performance Audit",      price: 67.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
      { name: "Competition Fueling",    price: 83.0, location: "Lisboa", duration_minutes: 75, lat: 38.7223, lng: -9.1393 },
      { name: "Online Athlete Session", price: 47.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Patrícia Lopes",
    email: "patricia.lopes@nutrium-demo.com",
    specialty: "Women's Health Nutrition",
    bio: "Supports women through PCOS, fertility, perimenopause, and all life-stage nutritional transitions.",
    photo_url: "https://i.pravatar.cc/150?img=53",
    services: [
      { name: "Women's Health Consult",    price: 71.0, location: "Porto",  duration_minutes: 60, lat: 41.1496, lng: -8.6109 },
      { name: "Cycle Support",             price: 59.0, location: "Porto",  duration_minutes: 45, lat: 41.1496, lng: -8.6109 },
      { name: "Online Hormone Follow-up",  price: 49.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  },
  {
    name: "Bruno Reis",
    email: "bruno.reis@nutrium-demo.com",
    specialty: "Metabolic Health",
    bio: "Focused on reversing insulin resistance, managing prediabetes, and building lasting metabolic habits.",
    photo_url: "https://i.pravatar.cc/150?img=8",
    services: [
      { name: "Metabolic Review",          price: 74.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
      { name: "Prediabetes Plan",          price: 61.0, location: "Lisboa", duration_minutes: 45, lat: 38.7223, lng: -9.1393 },
      { name: "Online Metabolic Support",  price: 51.0, location: "Online", duration_minutes: 45, lat: nil,     lng: nil     }
    ]
  }
]

nutritionists_data.each do |data|
  services = data.delete(:services)
  n = Nutritionist.find_or_create_by!(email: data[:email]) do |rec|
    rec.assign_attributes(data)
  end
  services.each do |svc|
    n.services.find_or_create_by!(name: svc[:name]) do |s|
      s.assign_attributes(svc.except(:name))
    end
  end
end

puts "✅  Created #{Nutritionist.count} nutritionists and #{Service.count} services."

# ─────────────────────────────────────────────
# APPOINTMENT REQUESTS
# Spread across multiple nutritionists with all three statuses
# so the dashboard looks genuinely populated.
# ─────────────────────────────────────────────
puts "Seeding appointment requests..."

requests = [
  # ── Carlos Mendes (Wellness) ──
  {
    nutritionist_email: "carlos.mendes@nutrium-demo.com",
    service_name:       "Wellness Consult",
    guest_name:         "Francisco Neves",
    guest_email:        "francisco.neves@example.com",
    requested_at:       2.days.from_now.change(hour: 9,  min: 30),
    status:             "pending"
  },
  {
    nutritionist_email: "carlos.mendes@nutrium-demo.com",
    service_name:       "Lifestyle Plan",
    guest_name:         "Mariana Fonseca",
    guest_email:        "mariana.fonseca@example.com",
    requested_at:       3.days.from_now.change(hour: 11, min: 0),
    status:             "pending"
  },
  {
    nutritionist_email: "carlos.mendes@nutrium-demo.com",
    service_name:       "Online Session",
    guest_name:         "Gonçalo Pires",
    guest_email:        "goncalo.pires@example.com",
    requested_at:       1.week.from_now.change(hour: 16, min: 0),
    status:             "accepted"
  },
  {
    nutritionist_email: "carlos.mendes@nutrium-demo.com",
    service_name:       "Wellness Consult",
    guest_name:         "Catarina Sousa",
    guest_email:        "catarina.sousa@example.com",
    requested_at:       3.weeks.ago.change(hour: 10, min: 0),
    status:             "rejected"
  },

  # ── João Ferreira (Clinical) ──
  {
    nutritionist_email: "joao.ferreira@nutrium-demo.com",
    service_name:       "First Consultation",
    guest_name:         "Rúben Carvalho",
    guest_email:        "ruben.carvalho@example.com",
    requested_at:       1.day.from_now.change(hour: 10, min: 0),
    status:             "pending"
  },
  {
    nutritionist_email: "joao.ferreira@nutrium-demo.com",
    service_name:       "Weight Management",
    guest_name:         "Leonor Magalhães",
    guest_email:        "leonor.magalhaes@example.com",
    requested_at:       4.days.from_now.change(hour: 14, min: 30),
    status:             "accepted"
  },
  {
    nutritionist_email: "joao.ferreira@nutrium-demo.com",
    service_name:       "Online Consultation",
    guest_name:         "Diogo Tavares",
    guest_email:        "diogo.tavares@example.com",
    requested_at:       2.weeks.ago.change(hour: 9, min: 0),
    status:             "accepted"
  },

  # ── Beatriz Santos (Gut Health) ──
  {
    nutritionist_email: "beatriz.santos@nutrium-demo.com",
    service_name:       "Digestive Health Consult",
    guest_name:         "Helena Cruz",
    guest_email:        "helena.cruz@example.com",
    requested_at:       3.days.from_now.change(hour: 9, min: 0),
    status:             "pending"
  },
  {
    nutritionist_email: "beatriz.santos@nutrium-demo.com",
    service_name:       "IBS Follow-up",
    guest_name:         "André Lima",
    guest_email:        "andre.lima@example.com",
    requested_at:       5.days.from_now.change(hour: 15, min: 0),
    status:             "accepted"
  },
  {
    nutritionist_email: "beatriz.santos@nutrium-demo.com",
    service_name:       "Online Consultation",
    guest_name:         "Sara Bento",
    guest_email:        "sara.bento@example.com",
    requested_at:       1.month.ago.change(hour: 11, min: 30),
    status:             "rejected"
  },

  # ── Sofia Costa (Vegan) ──
  {
    nutritionist_email: "sofia.costa@nutrium-demo.com",
    service_name:       "Plant-Based Consult",
    guest_name:         "Tomás Vieira",
    guest_email:        "tomas.vieira@example.com",
    requested_at:       2.days.from_now.change(hour: 13, min: 0),
    status:             "pending"
  },
  {
    nutritionist_email: "sofia.costa@nutrium-demo.com",
    service_name:       "Vegan Meal Planning",
    guest_name:         "Inês Mota",
    guest_email:        "ines.mota@example.com",
    requested_at:       6.days.from_now.change(hour: 10, min: 30),
    status:             "accepted"
  },

  # ── Inês Carvalho (Hormonal) ──
  {
    nutritionist_email: "ines.carvalho@nutrium-demo.com",
    service_name:       "Hormonal Consult",
    guest_name:         "Filipa Leal",
    guest_email:        "filipa.leal@example.com",
    requested_at:       1.day.from_now.change(hour: 11, min: 0),
    status:             "pending"
  },
  {
    nutritionist_email: "ines.carvalho@nutrium-demo.com",
    service_name:       "PCOS Follow-up",
    guest_name:         "Madalena Correia",
    guest_email:        "madalena.correia@example.com",
    requested_at:       5.days.from_now.change(hour: 9, min: 30),
    status:             "accepted"
  },
  {
    nutritionist_email: "ines.carvalho@nutrium-demo.com",
    service_name:       "Online Session",
    guest_name:         "Beatriz Nunes",
    guest_email:        "beatriz.nunes@example.com",
    requested_at:       3.weeks.ago.change(hour: 14, min: 0),
    status:             "rejected"
  },

  # ── Pedro Gomes (Diabetes) ──
  {
    nutritionist_email: "pedro.gomes@nutrium-demo.com",
    service_name:       "Diabetes Consult",
    guest_name:         "Joaquim Ferreira",
    guest_email:        "joaquim.ferreira@example.com",
    requested_at:       4.days.from_now.change(hour: 10, min: 0),
    status:             "pending"
  },
  {
    nutritionist_email: "pedro.gomes@nutrium-demo.com",
    service_name:       "Glycemic Control",
    guest_name:         "Rosa Antunes",
    guest_email:        "rosa.antunes@example.com",
    requested_at:       1.week.from_now.change(hour: 15, min: 30),
    status:             "accepted"
  },

  # ── Miguel Teixeira (Fitness) ──
  {
    nutritionist_email: "miguel.teixeira@nutrium-demo.com",
    service_name:       "Performance Consult",
    guest_name:         "Rodrigo Santos",
    guest_email:        "rodrigo.santos@example.com",
    requested_at:       2.days.from_now.change(hour: 8, min: 30),
    status:             "pending"
  },
  {
    nutritionist_email: "miguel.teixeira@nutrium-demo.com",
    service_name:       "Muscle Gain Plan",
    guest_name:         "Frederico Alves",
    guest_email:        "frederico.alves@example.com",
    requested_at:       1.week.from_now.change(hour: 12, min: 0),
    status:             "accepted"
  },
  {
    nutritionist_email: "miguel.teixeira@nutrium-demo.com",
    service_name:       "Online Coaching",
    guest_name:         "Marco Ribeiro",
    guest_email:        "marco.ribeiro@example.com",
    requested_at:       2.months.ago.change(hour: 17, min: 0),
    status:             "rejected"
  },

  # ── Cláudia Ribeiro (Pregnancy) ──
  {
    nutritionist_email: "claudia.ribeiro@nutrium-demo.com",
    service_name:       "Pregnancy Consult",
    guest_name:         "Luísa Mendonça",
    guest_email:        "luisa.mendonca@example.com",
    requested_at:       3.days.from_now.change(hour: 11, min: 30),
    status:             "accepted"
  },
  {
    nutritionist_email: "claudia.ribeiro@nutrium-demo.com",
    service_name:       "Postpartum Follow-up",
    guest_name:         "Vera Pinheiro",
    guest_email:        "vera.pinheiro@example.com",
    requested_at:       6.days.from_now.change(hour: 10, min: 0),
    status:             "pending"
  },

  # ── Nuno Correia (Performance) ──
  {
    nutritionist_email: "nuno.correia@nutrium-demo.com",
    service_name:       "Performance Audit",
    guest_name:         "Daniel Moreira",
    guest_email:        "daniel.moreira@example.com",
    requested_at:       5.days.from_now.change(hour: 8, min: 0),
    status:             "pending"
  },
  {
    nutritionist_email: "nuno.correia@nutrium-demo.com",
    service_name:       "Competition Fueling",
    guest_name:         "Tiago Braga",
    guest_email:        "tiago.braga@example.com",
    requested_at:       10.days.from_now.change(hour: 9, min: 0),
    status:             "accepted"
  }
]

requests.each do |attrs|
  nutritionist = Nutritionist.find_by!(email: attrs[:nutritionist_email])
  service      = nutritionist.services.find_by!(name: attrs[:service_name])

  AppointmentRequest.create!(
    guest_name:   attrs[:guest_name],
    guest_email:  attrs[:guest_email],
    requested_at: attrs[:requested_at],
    status:       attrs[:status],
    nutritionist: nutritionist,
    service:      service
  )
end

puts "✅  Created #{AppointmentRequest.count} appointment requests."
puts "Done! 🌱"
