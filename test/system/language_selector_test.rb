require "application_system_test_case"

class LanguageSelectorTest < ApplicationSystemTestCase
  test "persists selected language across pages" do
    visit root_path

    assert_selector "h1", text: "Find your nutritionist"

    within "header" do
      find("select").find("option", text: "🇵🇹").select_option
    end

    assert_selector "h1", text: "Encontre o seu nutricionista"
    assert_link "É profissional de nutrição? Conheça o nosso software →"

    click_link "É profissional de nutrição? Conheça o nosso software →"

    assert_selector "h1", text: "Pedidos Pendentes"
  end
end
