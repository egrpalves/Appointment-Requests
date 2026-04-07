FactoryBot.define do
  factory :nutritionist do
    sequence(:name)  { |n| "Nutritionist #{n}" }
    sequence(:email) { |n| "nutritionist#{n}@example.com" }
    specialty { "Clinical Nutrition" }
    bio       { "A dedicated professional with years of experience." }
    photo_url { nil }

    trait :with_services do
      after(:create) do |n|
        create(:service, nutritionist: n, location: "Braga")
        create(:service, nutritionist: n, name: "Follow-up", location: "Porto", price: 40.0)
      end
    end
  end

  factory :service do
    association :nutritionist
    sequence(:name) { |n| "Service #{n}" }
    price              { 60.0 }
    location           { "Braga" }
    duration_minutes   { 60 }
    lat                { 41.5518 }
    lng                { -8.4229 }
  end

  factory :appointment_request do
    association :nutritionist
    association :service
    guest_name  { Faker::Name.name }
    guest_email { Faker::Internet.unique.email }
    requested_at { 2.days.from_now.change(hour: 10, min: 0) }
    status      { "pending" }
  end
end
