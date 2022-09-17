# useEffect performs side effects on a components

# useEffect = componetDidMount + componentDidUpdate + componentWillUnmount

# scenario 1:

dependecy list is undefined,this effect will fire when the component first mounted and every time when the component rerenders

useEffect(() => {
console.log('fire every time the component renders');
});

# scenario 2:

dependency list is set to [],this effect will only fire once , when the first component first mounted

useEffect(() => {
console.log('only fire when the component first mounted');
}, []);

# scenario 3:

dependency list is not empty,this effect will fire when the component first mounter, and every time when variable in the dependency list changes

useEffect(() => {
console.log(width);
}, [width]);

# scenario 4:

clean up function is defined inside useEffect hook, this cleanup function fires at the componentWillUnmount lifecycle

const updateWindowWidth = () => setWidth(window.innerWidth);
useEffect(() => {
window.addEventListener('resize', updateWindowWidth);
return () => {
window.removeEventListener('resize', updateWindowWidth);
};
});

# scenario 5,

we can optimize scenario 4 , by adding eventListener only once

const updateWindowWidth = () => setWidth(window.innerWidth);
useEffect(() => {
window.addEventListener('resize', updateWindowWidth);
}, []);
