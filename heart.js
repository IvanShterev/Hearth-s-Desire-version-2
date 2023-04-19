

const GrunedaEl = document.querySelector('.Gruneda');
const NoManLandEl = document.querySelector('.NoManLand');
const AshtalEl = document.querySelector('.Ashtal');
const GrunedaIndepthEl = document.querySelector('.Gruneda-indepth');
const NoManLandIndepthEl = document.querySelector('.NoManLand-indepth');
const AshtalIndepthEl = document.querySelector('.Ashtal-indepth');
const PageHeaderEl = document.querySelector('.page-header');
const CountriesContainerEl = document.querySelector('.countries-container');

GrunedaEl.addEventListener('click', ()=>{
    CountriesContainerEl.style.display = 'none';
    GrunedaIndepthEl.style.display = 'block';
    PageHeaderEl.style.display = 'none';
});

NoManLandEl.addEventListener('click', ()=>{
    CountriesContainerEl.style.display = 'none';
    NoManLandIndepthEl.style.display = 'block';
    PageHeaderEl.style.display = 'none';
});

AshtalEl.addEventListener('click', ()=>{
    CountriesContainerEl.style.display = 'none';
    AshtalIndepthEl.style.display = 'block';
    PageHeaderEl.style.display = 'none';
});
