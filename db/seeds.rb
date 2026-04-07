# db/seeds.rb
# Run with: rails db:seed

puts "Seeding nutritionists..."

nutritionists_data = [
  {
    name: "Maria Silva",
    email: "maria.silva@nutrium-demo.com",
    specialty: "Sports Nutrition",
    bio: "Specialist in sports nutrition and performance optimisation with 10+ years experience.",
    photo_url: "https://i.pravatar.cc/150?img=47",
    services: [
      { name: "First Consultation", price: 60.0,  location: "Braga",  duration_minutes: 60,  lat: 41.5518,  lng: -8.4229 },
      { name: "Follow-up Session",  price: 40.0,  location: "Braga",  duration_minutes: 45,  lat: 41.5518,  lng: -8.4229 },
      { name: "Online Follow-up",   price: 30.0,  location: "Online", duration_minutes: 30,  lat: nil,      lng: nil }
    ]
  },
  {
    name: "João Ferreira",
    email: "joao.ferreira@nutrium-demo.com",
    specialty: "Clinical Nutrition",
    bio: "Clinical nutritionist focused on metabolic disorders and weight management.",
    photo_url: "https://i.pravatar.cc/150?img=68",
    services: [
      { name: "First Consultation", price: 75.0,  location: "Porto",   duration_minutes: 60, lat: 41.1579,  lng: -8.6291 },
      { name: "Weight Management",  price: 55.0,  location: "Porto",   duration_minutes: 60, lat: 41.1579,  lng: -8.6291 },
      { name: "Online Consultation", price: 45.0,  location: "Online",  duration_minutes: 45, lat: nil,      lng: nil }
    ]
  },
  {
    name: "Ana Rodrigues",
    email: "ana.rodrigues@nutrium-demo.com",
    specialty: "Pediatric Nutrition",
    bio: "Dedicated to children's health, Ana has helped hundreds of families build healthy eating habits.",
    photo_url: "https://i.pravatar.cc/150?img=45",
    services: [
      { name: "Pediatric Consult",  price: 65.0,  location: "Lisboa",  duration_minutes: 60, lat: 38.7223,  lng: -9.1393 },
      { name: "Online Pediatric",   price: 50.0,  location: "Online",  duration_minutes: 45, lat: nil,      lng: nil }
    ]
  },
  {
    name: "Carlos Mendes",
    email: "carlos.mendes@nutrium-demo.com",
    specialty: "Dietetics & Wellness",
    bio: "Holistic approach to nutrition, integrating wellness and lifestyle coaching.",
    photo_url: "https://i.pravatar.cc/150?img=12",
    services: [
      { name: "Wellness Consult",   price: 55.0,  location: "Braga",   duration_minutes: 60, lat: 41.5465,  lng: -8.4265 },
      { name: "Lifestyle Plan",     price: 80.0,  location: "Braga",   duration_minutes: 90, lat: 41.5465,  lng: -8.4265 },
      { name: "Online Session",     price: 35.0,  location: "Online",  duration_minutes: 30, lat: nil,      lng: nil }
    ]
  },
  {
    name: "Sofia Costa",
    email: "sofia.costa@nutrium-demo.com",
    specialty: "Vegan & Plant-Based Nutrition",
    bio: "Passionate about plant-based eating and sustainable nutrition for long-term health.",
    photo_url: "https://i.pravatar.cc/150?img=49",
    services: [
      { name: "Plant-Based Consult", price: 60.0,  location: "Porto",   duration_minutes: 60, lat: 41.1496,  lng: -8.6109 },
      { name: "Vegan Meal Planning", price: 90.0,  location: "Porto",   duration_minutes: 90, lat: 41.1496,  lng: -8.6109 }
    ]
  },
  {
    name: "Rui Oliveira",
    email: "rui.oliveira@nutrium-demo.com",
    specialty: "Oncology Nutrition",
    bio: "Supporting cancer patients through nutritional therapy and evidence-based care.",
    photo_url: "https://i.pravatar.cc/150?img=15",
    services: [
      { name: "First Consultation", price: 80.0,  location: "Coimbra", duration_minutes: 60, lat: 40.2033,  lng: -8.4103 },
      { name: "Follow-up",          price: 60.0,  location: "Coimbra", duration_minutes: 45, lat: 40.2033,  lng: -8.4103 },
      { name: "Online Support",     price: 50.0,  location: "Online",  duration_minutes: 45, lat: nil,      lng: nil }
    ]
  },
  {
  name: "Beatriz Santos",
  email: "beatriz.santos@nutrium-demo.com",
  specialty: "Gut Health",
  bio: "Focused on digestive health, IBS, and microbiome balance through personalized plans.",
  photo_url: "https://i.pravatar.cc/150?img=32",
  services: [
    { name: "Digestive Health Consult", price: 70.0, location: "Porto", duration_minutes: 60, lat: 41.1496, lng: -8.6109 },
    { name: "IBS Follow-up",            price: 50.0, location: "Porto", duration_minutes: 45, lat: 41.1496, lng: -8.6109 },
    { name: "Online Consultation",      price: 40.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
  ]
},
{
  name: "Tiago Martins",
  email: "tiago.martins@nutrium-demo.com",
  specialty: "Weight Loss",
  bio: "Helps clients achieve sustainable weight loss with practical and realistic plans.",
  photo_url: "https://i.pravatar.cc/150?img=33",
  services: [
    { name: "Initial Assessment", price: 65.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
    { name: "Fat Loss Program",   price: 75.0, location: "Lisboa", duration_minutes: 75, lat: 38.7223, lng: -9.1393 },
    { name: "Online Coaching",    price: 45.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
  ]
},
{
  name: "Inês Carvalho",
  email: "ines.carvalho@nutrium-demo.com",
  specialty: "Hormonal Nutrition",
  bio: "Specialized in PCOS, thyroid health, and hormonal balance through nutrition.",
  photo_url: "https://i.pravatar.cc/150?img=28",
  services: [
    { name: "Hormonal Consult",   price: 70.0, location: "Braga", duration_minutes: 60, lat: 41.5454, lng: -8.4265 },
    { name: "PCOS Follow-up",     price: 55.0, location: "Braga", duration_minutes: 45, lat: 41.5454, lng: -8.4265 },
    { name: "Online Session",     price: 45.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
  ]
},
{
  name: "Miguel Teixeira",
  email: "miguel.teixeira@nutrium-demo.com",
  specialty: "Fitness Nutrition",
  bio: "Works with athletes and gym-goers to improve body composition and recovery.",
  photo_url: "https://i.pravatar.cc/150?img=22",
  services: [
    { name: "Performance Consult", price: 65.0, location: "Porto", duration_minutes: 60, lat: 41.1579, lng: -8.6291 },
    { name: "Muscle Gain Plan",    price: 85.0, location: "Porto", duration_minutes: 75, lat: 41.1579, lng: -8.6291 },
    { name: "Online Coaching",     price: 50.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
  ]
},
{
  name: "Cláudia Ribeiro",
  email: "claudia.ribeiro@nutrium-demo.com",
  specialty: "Pregnancy Nutrition",
  bio: "Supports women through pregnancy and postpartum with tailored nutrition plans.",
  photo_url: "https://i.pravatar.cc/150?img=36",
  services: [
    { name: "Pregnancy Consult",   price: 75.0, location: "Coimbra", duration_minutes: 60, lat: 40.2033, lng: -8.4103 },
    { name: "Postpartum Follow-up", price: 60.0, location: "Coimbra", duration_minutes: 45, lat: 40.2033, lng: -8.4103 },
    { name: "Online Support",      price: 50.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
  ]
},
{
  name: "Pedro Gomes",
  email: "pedro.gomes@nutrium-demo.com",
  specialty: "Diabetes Nutrition",
  bio: "Expert in managing type 1 and type 2 diabetes through nutrition and lifestyle.",
  photo_url: "https://i.pravatar.cc/150?img=14",
  services: [
    { name: "Diabetes Consult", price: 80.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
    { name: "Glycemic Control", price: 60.0, location: "Lisboa", duration_minutes: 45, lat: 38.7223, lng: -9.1393 },
    { name: "Online Follow-up", price: 50.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
  ]
},
  {
    name: "Beatriz Santos",
    email: "beatriz.santos@nutrium-demo.com",
    specialty: "Gut Health",
    bio: "Focused on digestive health, IBS, and microbiome balance through personalized plans.",
    photo_url: "https://i.pravatar.cc/150?img=32",
    services: [
      { name: "Digestive Health Consult", price: 70.0, location: "Porto", duration_minutes: 60, lat: 41.1496, lng: -8.6109 },
      { name: "IBS Follow-up", price: 50.0, location: "Porto", duration_minutes: 45, lat: 41.1496, lng: -8.6109 },
      { name: "Online Consultation", price: 40.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Tiago Martins",
    email: "tiago.martins@nutrium-demo.com",
    specialty: "Weight Loss",
    bio: "Helps clients achieve sustainable weight loss with practical and realistic plans.",
    photo_url: "https://i.pravatar.cc/150?img=33",
    services: [
      { name: "Initial Assessment", price: 65.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
      { name: "Fat Loss Program", price: 75.0, location: "Lisboa", duration_minutes: 75, lat: 38.7223, lng: -9.1393 },
      { name: "Online Coaching", price: 45.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Inês Carvalho",
    email: "ines.carvalho@nutrium-demo.com",
    specialty: "Hormonal Nutrition",
    bio: "Specialized in PCOS, thyroid health, and hormonal balance through nutrition.",
    photo_url: "https://i.pravatar.cc/150?img=28",
    services: [
      { name: "Hormonal Consult", price: 70.0, location: "Braga", duration_minutes: 60, lat: 41.5454, lng: -8.4265 },
      { name: "PCOS Follow-up", price: 55.0, location: "Braga", duration_minutes: 45, lat: 41.5454, lng: -8.4265 },
      { name: "Online Session", price: 45.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Miguel Teixeira",
    email: "miguel.teixeira@nutrium-demo.com",
    specialty: "Fitness Nutrition",
    bio: "Works with athletes and gym-goers to improve body composition and recovery.",
    photo_url: "https://i.pravatar.cc/150?img=22",
    services: [
      { name: "Performance Consult", price: 65.0, location: "Porto", duration_minutes: 60, lat: 41.1579, lng: -8.6291 },
      { name: "Muscle Gain Plan", price: 85.0, location: "Porto", duration_minutes: 75, lat: 41.1579, lng: -8.6291 },
      { name: "Online Coaching", price: 50.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Cláudia Ribeiro",
    email: "claudia.ribeiro@nutrium-demo.com",
    specialty: "Pregnancy Nutrition",
    bio: "Supports women through pregnancy and postpartum with tailored nutrition plans.",
    photo_url: "https://i.pravatar.cc/150?img=36",
    services: [
      { name: "Pregnancy Consult", price: 75.0, location: "Coimbra", duration_minutes: 60, lat: 40.2033, lng: -8.4103 },
      { name: "Postpartum Follow-up", price: 60.0, location: "Coimbra", duration_minutes: 45, lat: 40.2033, lng: -8.4103 },
      { name: "Online Support", price: 50.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Pedro Gomes",
    email: "pedro.gomes@nutrium-demo.com",
    specialty: "Diabetes Nutrition",
    bio: "Expert in managing type 1 and type 2 diabetes through nutrition and lifestyle.",
    photo_url: "https://i.pravatar.cc/150?img=14",
    services: [
      { name: "Diabetes Consult", price: 80.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
      { name: "Glycemic Control", price: 60.0, location: "Lisboa", duration_minutes: 45, lat: 38.7223, lng: -9.1393 },
      { name: "Online Follow-up", price: 50.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Sara Almeida",
    email: "sara.almeida@nutrium-demo.com",
    specialty: "Sports Nutrition",
    bio: "Supports endurance and strength athletes with evidence-based fueling strategies.",
    photo_url: "https://i.pravatar.cc/150?img=41",
    services: [
      { name: "Race Prep Consult", price: 68.0, location: "Porto", duration_minutes: 60, lat: 41.1496, lng: -8.6109 },
      { name: "Recovery Plan", price: 52.0, location: "Porto", duration_minutes: 45, lat: 41.1496, lng: -8.6109 },
      { name: "Online Performance Review", price: 42.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Filipe Costa",
    email: "filipe.costa@nutrium-demo.com",
    specialty: "Clinical Nutrition",
    bio: "Helps patients manage cholesterol, hypertension, and metabolic syndrome.",
    photo_url: "https://i.pravatar.cc/150?img=18",
    services: [
      { name: "Clinical Assessment", price: 72.0, location: "Braga", duration_minutes: 60, lat: 41.5518, lng: -8.4229 },
      { name: "Metabolic Follow-up", price: 58.0, location: "Braga", duration_minutes: 45, lat: 41.5518, lng: -8.4229 },
      { name: "Online Care Plan", price: 48.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Marta Fernandes",
    email: "marta.fernandes@nutrium-demo.com",
    specialty: "Pediatric Nutrition",
    bio: "Builds healthy eating habits for children, teens, and families.",
    photo_url: "https://i.pravatar.cc/150?img=44",
    services: [
      { name: "Child Nutrition Consult", price: 66.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
      { name: "Teen Growth Review", price: 54.0, location: "Lisboa", duration_minutes: 45, lat: 38.7223, lng: -9.1393 },
      { name: "Online Family Session", price: 44.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Ricardo Neves",
    email: "ricardo.neves@nutrium-demo.com",
    specialty: "Wellness Coaching",
    bio: "Combines nutrition with habit building, sleep, and stress management.",
    photo_url: "https://i.pravatar.cc/150?img=25",
    services: [
      { name: "Wellness Consult", price: 57.0, location: "Coimbra", duration_minutes: 60, lat: 40.2033, lng: -8.4103 },
      { name: "Habit Reset Plan", price: 73.0, location: "Coimbra", duration_minutes: 75, lat: 40.2033, lng: -8.4103 },
      { name: "Online Check-in", price: 37.0, location: "Online", duration_minutes: 30, lat: nil, lng: nil }
    ]
  },
  {
    name: "Helena Pinto",
    email: "helena.pinto@nutrium-demo.com",
    specialty: "Vegan Nutrition",
    bio: "Designs balanced plant-based plans for health, sport, and sustainability.",
    photo_url: "https://i.pravatar.cc/150?img=48",
    services: [
      { name: "Vegan Consult", price: 62.0, location: "Porto", duration_minutes: 60, lat: 41.1496, lng: -8.6109 },
      { name: "Meal Planning", price: 88.0, location: "Porto", duration_minutes: 90, lat: 41.1496, lng: -8.6109 },
      { name: "Online Plant-Based Review", price: 46.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "André Sousa",
    email: "andre.sousa@nutrium-demo.com",
    specialty: "Oncology Nutrition",
    bio: "Provides nutritional support throughout treatment and recovery.",
    photo_url: "https://i.pravatar.cc/150?img=19",
    services: [
      { name: "Oncology Consult", price: 82.0, location: "Coimbra", duration_minutes: 60, lat: 40.2033, lng: -8.4103 },
      { name: "Symptom Management", price: 64.0, location: "Coimbra", duration_minutes: 45, lat: 40.2033, lng: -8.4103 },
      { name: "Online Support", price: 52.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Joana Monteiro",
    email: "joana.monteiro@nutrium-demo.com",
    specialty: "Digestive Health",
    bio: "Specializes in bloating, reflux, IBS, and food intolerances.",
    photo_url: "https://i.pravatar.cc/150?img=29",
    services: [
      { name: "Digestive Review", price: 69.0, location: "Braga", duration_minutes: 60, lat: 41.5518, lng: -8.4229 },
      { name: "Food Intolerance Follow-up", price: 53.0, location: "Braga", duration_minutes: 45, lat: 41.5518, lng: -8.4229 },
      { name: "Online Gut Check", price: 43.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Nuno Correia",
    email: "nuno.correia@nutrium-demo.com",
    specialty: "Performance Nutrition",
    bio: "Works with runners, cyclists, and team sports athletes.",
    photo_url: "https://i.pravatar.cc/150?img=50",
    services: [
      { name: "Performance Audit", price: 67.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
      { name: "Competition Fueling", price: 83.0, location: "Lisboa", duration_minutes: 75, lat: 38.7223, lng: -9.1393 },
      { name: "Online Athlete Session", price: 47.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Patrícia Lopes",
    email: "patricia.lopes@nutrium-demo.com",
    specialty: "Women’s Health Nutrition",
    bio: "Supports PCOS, fertility, and life-stage nutrition needs.",
    photo_url: "https://i.pravatar.cc/150?img=53",
    services: [
      { name: "Women’s Health Consult", price: 71.0, location: "Porto", duration_minutes: 60, lat: 41.1496, lng: -8.6109 },
      { name: "Cycle Support", price: 59.0, location: "Porto", duration_minutes: 45, lat: 41.1496, lng: -8.6109 },
      { name: "Online Hormone Follow-up", price: 49.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
    ]
  },
  {
    name: "Bruno Reis",
    email: "bruno.reis@nutrium-demo.com",
    specialty: "Metabolic Health",
    bio: "Focused on insulin resistance, prediabetes, and long-term habits.",
    photo_url: "https://i.pravatar.cc/150?img=8",
    services: [
      { name: "Metabolic Review", price: 74.0, location: "Lisboa", duration_minutes: 60, lat: 38.7223, lng: -9.1393 },
      { name: "Prediabetes Plan", price: 61.0, location: "Lisboa", duration_minutes: 45, lat: 38.7223, lng: -9.1393 },
      { name: "Online Metabolic Support", price: 51.0, location: "Online", duration_minutes: 45, lat: nil, lng: nil }
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

# Create a few sample appointment requests for the dashboard
puts "Seeding sample appointment requests..."

AppointmentRequest.destroy_all

nutritionist = Nutritionist.find_by!(email: "carlos.mendes@nutrium-demo.com")
service = nutritionist.services.first

[
  { guest_name: "Francisco Neves",  guest_email: "francisco@example.com", requested_at: 2.days.from_now.change(hour: 9, min: 30) },
  { guest_name: "Beatriz Santos",   guest_email: "beatriz@example.com",   requested_at: 3.days.from_now.change(hour: 11, min: 0) },
  { guest_name: "Pedro Almeida",    guest_email: "pedro@example.com",     requested_at: 4.days.from_now.change(hour: 14, min: 0) }
].each do |attrs|
  AppointmentRequest.create!(
    attrs.merge(nutritionist: nutritionist, service: service, status: "pending")
  )
end

puts "✅  Created #{AppointmentRequest.count} sample appointment requests."
puts "Done!"
