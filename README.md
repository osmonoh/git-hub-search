# GitHub repository search

This is my solution of the Frontend coding challenge.

It is a simple single page application called 'GitHub repository search'. It enables users to search for GitHub repositories, display the results of the search, as well as to see some details of the repository owner on a separate page.

This project is created with **create-react-app** and it is making use of the **GitHub REST API**. HTTP client **Axios** is used to fetch the data, **Context API** for state management, **react-router-dom** for navigation and **CSS** along with **react-icons** to style the application. GitHub repository search is deployed on **Netlify**.

You can see live preview [here](https://git-hub-repo-search.netlify.app/).

---

On the home page there is a search field, which upon entering a search term and pressing enter redirects to the search results page, where the results (in the form of a list of repos) are displayed.

On initial search the number of displayed repos is limited to 5, however a 'More results' button is rendered (as long as there is more results to show) under the repos' list. Once this button is clicked, it triggers rendering of the next 5 results and so on, until there are no more results to show. On top of the page there is a search bar, which can be used to perform next searches if desired. After every search is performed, the total number of results is displayed. Each repo card shown in the list includes:

- name of the repository
- owner's username and avatar
- description
- used languages
- dates of creation and last update
- quality score

Quality score is a number representing the quality of the repository. The formula to calculate the repo quality is following:

`(number_of_stars + number_of_watchers + number_of_forks)`

divided by

`(1 + time_since_last_update + number_of_open_issues)`

Once a repo card is clicked, the user is redirected to a new page with the owner's account information. This info includes user's:

- avatar
- username
- name
- location
- bio
- github account url
- date of account creation
- number of followers

(name and location are displayed only if available, followers' number only if more than 0)

---

To use the application on your machine, please clone the repository from [here](https://github.com/osmonoh/git-hub-search). Once the repo is in your computer, open the terminal, make sure you are in the right folder and run the command: `npm i`. After all the dependencies are installed you can start the application running the command: `npm start`.
