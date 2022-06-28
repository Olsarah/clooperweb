export const Login = {
    emailInput: '[data-test="email"]',
    emailText: 'sarah.olanrewaju@clooper.com',
    emailText2:'sarah@yahoo.com',
    passwordInput:'[data-test="password"]',
    passwordText:'password',
    logInButton:'app-button'
  }
  export const Logout = {
    profileDropdown:'#profileDropdown > .dropdown-chip',
    logoutBtn: '.dropdown-menu > [data-test="logout"] > .dropdown-item > [data-test="add-property-btn"]',
  
  }
  
  export const Properties  = {
    profileDropdown:'#profileDropdown > .dropdown-chip',
    findProperty:'.dropdown-menu > :nth-child(3) > .dropdown-item',
    searchField:'.ms-3',
    findPropertyBtn:'.row > .col-md-3 > app-button > [data-test="btn"]',
    locationField:'#i6243dc71-1063-4c5b-888c-86ac47eb3846',
    checkInAndout:'.date-picker-input',
    checkIn:'body > bs-daterangepicker-container > div > div > div > div > bs-days-calendar-view:nth-child(1) > bs-calendar-layout > div.bs-datepicker-body > table > tbody > tr:nth-child(2) > td:nth-child(5)',
    checkOut:'',
    propertySelect:':nth-child(2) > app-listing > .listing > .title',
    favouriteIcon:':nth-child(2) > app-listing > .listing > :nth-child(2) > .justify-content-between > :nth-child(2) > .fav'

  }
  export const Profile={
    profileDropdown:'#profileDropdown > .dropdown-chip',
    findProperty:'.dropdown-menu > :nth-child(3) > .dropdown-item',
    listings:'.dropdown-menu > :nth-child(4) > .dropdown-item',
    trips:'.dropdown-menu > :nth-child(5) > .dropdown-item',
    favourites:'.dropdown-menu > :nth-child(6) > .dropdown-item',
    paymentHistory:'.dropdown-menu > :nth-child(8) > .dropdown-item > span',
    propertyPreferance:'.dropdown-menu > :nth-child(9) > .dropdown-item',
    settings:'.dropdown-menu > :nth-child(10) > .dropdown-item'

  }


  