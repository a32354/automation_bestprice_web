const { expect, browser, $ } = require('@wdio/globals')

describe('Flight Booking Function', () => {

    let bookingUrl = 'https://www.bestprice.vn';
    let flightFromSelector = '[data-id="flight_from"]';
    let flightToSelector = '[data-id="flight_to"]';
    let fromAirportSelector = '[value="Hà Nội (HAN)"]';
    let toAirportSelector = '[class="col-xs-6 col-sm-3 li-item-des des-chd flight_to_3"]';
    let departureDateSelector = '#departure_date_flight';
    let returnDateSelector = '#returning_date_flight';
    let dateFormSelector = '//table[@class="ui-datepicker-calendar"]/tbody/tr[4]/td[1]';
    let dateToSelector = '//table[@class="ui-datepicker-calendar"]/tbody/tr[4]/td[4]';

    let flightPassengerSelector = '#flight_passenger';
    // let addChildrenSelector = '[data-field="nb_children"]';

    let addChildrenSelector = '(//div[type="button"])[16]'
    let flightEconomySelector = '[class="class_promo mktnd_rdo_flight_economy"]'
    let searchButtonSelector = '#search_button'

    let checkSearchSuccessfullSelector = '#sort_by_flight_depart'


    it('Should book a flight ticket from Hanoi to Ho Chi Minh', async() => {
        //Opend booking flight page
        await browser.url(bookingUrl);

        //Maximize windows
        await browser.maximizeWindow();

        // Wait for flightFrom dropdown list displayed and click on it
        await $(flightFromSelector).click();

        //Select airport at Hanoi
        await $(fromAirportSelector).click();

        //click on flight to dropdown list
        await $(flightToSelector).click();

        //Select airport at Hochiminh
        await $(toAirportSelector).click();

        //Click on departure date flight text
        await $(departureDateSelector).click()

        //Select departure date on calendar
        await $(dateFormSelector).click();

        //Click on return date flight text
        await $(returnDateSelector).click();

        //Select return date on calendar
        await $(dateToSelector).click();

        //click on flight passenger text
        await $(flightPassengerSelector).click();

        //click add a children from 2-12 years old
        (await $(addChildrenSelector)).click();

        //Select type economic
        (await $(flightEconomySelector)).click();

        //Click search button
        await $(searchButtonSelector).click();

        //wait for the search and check for search success 
        await expect($(checkSearchSuccessfullSelector)).toBeExisting();
        await expect($(checkSearchSuccessfullSelector)).toHaveText("BestPrice đề xuất");
    })
})