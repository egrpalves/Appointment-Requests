require "application_system_test_case"

class HomeTest < ApplicationSystemTestCase
  test "visit homepage" do
    visit root_path

    assert_selector "h1", text: "Find your nutritionist"
  end
end
