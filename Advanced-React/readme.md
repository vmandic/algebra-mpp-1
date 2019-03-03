# Advanced React FAQ

1. Preporučen način renderiranja Rute:

```JavaScript
<Route path="/about" component = {About}/>
<Route path="/about" render={(props) => <div>About and lifecyle not retriggered</div>}/>
<Route path="/about" children={(props) => <div>Always Rendered but props.match maybe null</div>}/>
```

- Pogledati demo.

2. Korištenje metode children?

- Pogledati demo.

3. Kada se koristi Switch komponeneta kada ne?

- Pogledati demo.

4. DefaultRoute. Ruta home, 404 ili sl?

- `DefaultRoute` se ne koristi se od v4, `<Route exact path="/" />` je preporučena alternativa.

5. Which components will render when the URL path is /def?

```JavaScript
const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component = {A}/>
        <Route path="/abc" component = {B}/>
        <Route path="/def" component = {C}/>
        <Route path="/ghi" component = {D}/>
      </Switch>
    </BrowserRouter>
  </div>
);
```

- Prva koja parcijalno matcha po redu, a to je prva ruta i komponenta A (zato jer nema exact).

6. My advice is to not use Redux if you can accomplish your project with plain old React. If it gets too annoying to pass down state through parent components to child components, or if you have too many types of event handlers to keep track of, then it might be a good idea to use Redux. Redux was designed for complicated applications like Facebook or Twitter. If you are making a simple todo app then you probably don't need Redux.

- Odgovor je: ovisi. No, ako projekt raste, trebalo bi uzeti u obzir, inače potruditi se da ne treba, pogotovo ukoliko se može koristiti ContextAPI i React Hooks API kao zamjena.


7. Store. Kada je previše info u njemu? Store u praksi?

- Nema pravila, ako imate indikacije na perf. probleme treba mjeriti i možebitno razdvojiti na više storeova ili instanci reduxa. Bitno je u radu s reducer kodom imati uvijek na umu ta reducer kod mora biti "čist" (pure), što znači da ne smije se oslanjati na globalne varijable i uzrokovati nus rezultate (npr. ne smije se pozvati nekakav ajax zahtjev usred reducer koda).

8. Actions - Više o payload-ima (Reducer figures out what to do with the action type and payload and updates the state accordingly.)

- Akcije su glavni gradivni blok za izvođenje neke operacije koja mutira store state, nužno je da imaju specificiran samo type property. Reduceri "switchaju" na temelju action typea.

9. Actions i action creators. Kada se koji koristi?

```JavaScript
//action
var action = {
  type: ADD_ITEM,
  item: "apple"
};

//action creator
const addItem = item => {
  return {
    type: ADD_ITEM,
    item: item
  };
};
```

- Koriste se oboje, uvijek u tandemu, ključno je shvatiti da creatori stvaraju instance akcija koje se šalju u dispatch metodu koja te instance šalje prema spojenim reducerima koji će na temelju tipa okinuti kod za mutaciju store stateta.

10. `import { combineReducers } from "redux";`

- Spaja reducere u jedan veliki reducer i osigurava da se provjere svi action typeovi koje ulazni reduceri "switchaju". Reduceri uvijek trebaju biti "čisti" (pure) i ne uzrokovati side effect rezultate.