let isVerifiedd = true;
let isLoggedIn = true;
let hsPaymentToken = true;
let isGuest = true;


if(isFinite && isLoggedIn && hsPaymentToken){
    console.log('Greetings message to user');
    console.log('Grant accsees to paid course')

}else if(isVerifiedd || isGuest){
    console.log('Allow free previews')
}
else{
    console.log('Contact admin')
}