# Vue expander template

## Creating a new campaign
1. Clone the template to your local folder.
```
git clone git@github.com:ondrejshowhero/vue-expander.git [campaign-folder]
```
2. Create a new branch with the name of the project (including the delivery market, year and the week number of the campaign).
```
git checkout -b [country]/[year]-[campaign-name]-w[week-number]
```
*Please note - the naming conventions are a subject to change in the future.*

3. Install the dependencies.
```
npm install
```
4. Run the local server
```
npm run serve
```
5. Build the production version
```
npm run build
```
6. Compress the content of the `dist` folder (not the folder itself) and upload to the Create platform.
7. Make sure to push the new branch and all the future updates to git
```
git add -A
git commit -m "Some comment"
git push
```
