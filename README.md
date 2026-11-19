# ASSIGNMENT_3A-3B_MABANGLO

**Project Name:** VinylVault

**Author:** Joshua Mabanglo

## Project Setup & Execution

**Prerequisites:**

Your computer should have Node.js runtime version 21 or higher, along with the node package manager (npm). If you do not have Node.js installed, you can download it from the [Node.js website.](https://nodejs.org/en/download)

**To use this React app:**

**1.** Clone a copy of this repo locally. There are multiple ways to do this:

- Download a ZIP file of this repo (Green Code button > Download ZIP)
- Clone in the terminal using git:

```
git clone https://github.com/Joshua-Mabanglo/ASSIGNMENT_3A-3B_MABANGLO.git
```

**2.** Move into the main project directory using your terminal:

```
cd vinyl-vault
```

**3.** Install any missing packages using npm install:

```
npm install
```

**4.** Finally, start up the app with this command:

```
npm run dev
```

**5.** If the app initalizes successfully, you will recieve a localhost url in your terminal. Copy and paste it in your browser to view the project.

**Project Directory Structure:**

The node_modules file contains a lot of developer data and configurations needed for React. The public file can store small project media that can be delivered as is over the internet. The src file is where all your main components, pages, data, and styles live. Finally, package.json lists all the package dependencies and script commands for this project.

## React Flow Hierarchy & State Flow

- App (imports albums.js (aka albums), Uplifted states: cart array, cartCount (number). Uplifted functions: openCart(), addToCart(), removeFromCart(), updateCart(), clearCart())

  - \<Navbar /\> (inherited states: cartCount)

    - site-logo
    - site-nav (link to main vault)
    - cart-btn (shows count & opens cart)

  - Routes

    - Route path="/", element={\<VaultPage (inherits albums data, addToCart()) (variables: comprehensive & filtered genres array. states: setGenre) /\>}

      - Navbar
      - vault-main (hero title & subtitle)
      - genre-filters (btn group to filter album genres)
      - album-cards (display: grid, houses AlbumCard components)
        - AlbumCard (inherits albums data & addToCart())
          - album-img (Link to AlbumPage)
          - album-info (album name, price, genre)
          - album-btn (adds album to cart)

    - Route path="/album/:albumId" element={\<AlbumPage (inherits albums data, addToCart()) (states: quantity (monitors album qty to pass to cart)/\>}

      - breadcrumb-link (Link path)
      - album-main-img
      - album-main-text (album title, price, desc, stock)
      - album-main-select
        - select-group (input field that updates quantity state)
      - album-main-btn (sends album id & qty to addToCart())

    - Route path="/checkout" element={\<CheckoutPage (inherits cart array & clearCart()) (states: form data and confirming submit) (variables: subtotal, tax, total) (functions: onInput(), submitData()) /\>}
      - success-msg (after successful form submit)
        - success-title
        - success-subtitle
        - vault-btn (Link returns to Vault)
      - checkout-page
        - checkout-title
        - checkout-main
          - checkout-form
            - form-group (fullName)
              - group-label
              - group-input (type: text)
            - form-group (email)
              - group-label
              - group-input (type: email)
            - form-group (shipAddr)
              - group-label
              - group-input (type: text)
            - form-group (zip)
              - group-label
              - group-input (enforce zipcode pattern)
            - form-btn (onClick={submitData})
          - checkout-summary
            - summary-title
            - summary-entries
              - album-entry (title & quantity)
              - album-price
            - summary-calc
              - subtotal
                - subtotal-title
                - subtotal-amount
              - tax
                - tax-title
                - tax-amount
            - summary-total
              - total-title
              - total-amount

  - \<CartTab /\> (imports useNavigate for checkout) (inherits cart array, updateCart() & removeFromCart()) (states: cart subtotal and count) (functions: toCheckout())
    - empty-msg (if cart is empty)
    - cart-bg (closes cart if clicked)
    - cart-tab (stopPropogation() prevents closing main tab)
      - cart-header (title & count)
      - tab-main
        - cart-list (ul organizes albums in cart)
          - cart-item
            - cart-main-img
            - cart-info (title & price (product \* quantity))
            - amount-controls
              - update-album
                - add-btn (uses updateCart() to add)
                - album amount
                - subtract-btn (uses updateCart() to subtract)
              - delete-btn (uses removeFromCart())
      - tab-footer
        - pay-row (shows subtotal)
        - checkout-btn (useNavigate to CheckoutPage)
