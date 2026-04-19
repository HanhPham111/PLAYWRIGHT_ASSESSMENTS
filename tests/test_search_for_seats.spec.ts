import { expect } from "@playwright/test";
import {test} from "../common/fixtures/test_fixtures"
import { homepage } from "../common/page/homepage";
import { search_options } from "../common/constants/search_options_enum";
import { search_results_page } from "../common/page/search_results_page";

test.describe("Verify the search for available seats",()=> {

[{ departing_opt: search_options.july, returning_opt: search_options.december_2_years_from_now }].
forEach(({ departing_opt, returning_opt }) => {
test('Verify can search a seat successfully', async ({ page, init_test}) => {
  const search_page = new homepage(page);
  await search_page.input_searching_fields({departing_opt: departing_opt, returning_opt: returning_opt});
  await search_page.click_search_button();
  const results_page = new search_results_page(page);

  await expect(results_page.locators.search_results_content).toContainText('Seats available!');
  await expect(results_page.locators.search_results_content).toContainText('Call now on 0800 MARSAIR to book!');
}); 
});

[{ departing_opt: search_options.july, returning_opt: search_options.december_2_years_from_now, code:"AF3-FJK-418"},
{ departing_opt: search_options.july, returning_opt: search_options.december_2_years_from_now, code: "JJ5-OPQ-320"}
].
forEach(({ departing_opt, returning_opt, code}) => {
test(`Verify can search a seat with a valid code ${code} successfully`, async ({ page , init_test}) => {
  test.info().annotations.push({ type: 'bug', description: 'ID-7. ID-8'});
  const search_page = new homepage(page);
  await search_page.input_searching_fields({ departing_opt: departing_opt, returning_opt: returning_opt, code: code});
  await search_page.click_search_button();

  const results_page = new search_results_page(page);

  await expect(results_page.locators.search_results_content).toContainText(`Promotional code ${code} used: ${code.charAt(2)}0% discount!`);
  await expect(results_page.locators.search_results_content).toContainText('Seats available!');
  await expect(results_page.locators.search_results_content).toContainText('Call now on 0800 MARSAIR to book!');
});
});

[{ departing_opt: search_options.july, returning_opt: search_options.december_2_years_from_now, code:"AF3-FJK?419"}].
forEach(({ departing_opt, returning_opt, code}) => {
test(`Verify can search a seat with a invalid code successfully`, async ({ page, init_test}) => {
  test.info().annotations.push({ type: 'bug', description: 'ID-7. ID-8'});
  const search_page = new homepage(page);
  await search_page.input_searching_fields({ departing_opt: departing_opt, returning_opt: returning_opt, code: code});
  await search_page.click_search_button();

  const results_page = new search_results_page(page);

  await expect(results_page.locators.search_results_content).toContainText(`Sorry, code ${code} is not valid`);
  await expect(results_page.locators.search_results_content).toContainText('Seats available!');
  await expect(results_page.locators.search_results_content).toContainText('Call now on 0800 MARSAIR to book!');
});
});
}) 

test.describe("Verify the search for unavailable seats",()=>{

const unavailable_seat = [
    { departing_opt: search_options.july, returning_opt: search_options.december_next_year }, 
    { departing_opt: search_options.december, returning_opt: search_options.december_next_year}
  ];

for (const { departing_opt, returning_opt } of unavailable_seat) {
test(`Verify can search for an unavailable seat successfully with ${departing_opt} - ${returning_opt} `, async ({ page, init_test }) => {
  const search_page = new homepage(page);
  await search_page.input_searching_fields({departing_opt: departing_opt, returning_opt: returning_opt});
  await search_page.click_search_button();
  const results_page = new search_results_page(page);
  await expect(results_page.locators.search_results_content).toContainText('Sorry, there are no more seats available.');
}); 
}
});

test.describe("Verify the search for invalid returns",()=>{

const inavlid_return = [
    { departing_opt: search_options.july_next_year, returning_opt: search_options.december_next_year }
  ];

for (const { departing_opt, returning_opt } of inavlid_return) {
test(`Verify message when search for inavlid return`, async ({ page, init_test }) => {
  const search_page = new homepage(page);
  await search_page.input_searching_fields({departing_opt: departing_opt, returning_opt: returning_opt});
  await search_page.click_search_button();
  const results_page = new search_results_page(page);
  await expect(results_page.locators.search_results_content).toContainText('Unfortunately, this schedule is not possible. Please try again.');
}); 
}
});