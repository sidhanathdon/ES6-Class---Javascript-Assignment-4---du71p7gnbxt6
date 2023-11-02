//Write your code here
class API{
    #secure=true;
    constructor(url, method='GET')
    {
        this.url=url
        this.method=method
        this.#secure=url.startsWith('https')
    }
    isSecure(){
        return this.#secure
    }
    updateUrl(newUrl) {
        this.url = newUrl;
        this.#secure = newUrl.startsWith('https');
    }

}

// const s = new API('http://api.com/api/hello');
// console.log(s.isSecure()); // false

// s.updateUrl('https://api.com/api/hello');
// console.log(s.isSecure()); // true

// console.log(s.url); // https://api.com/api/hello
// console.log(s.method); // GET
// console.log(s.secure); // undefined (because it's a private field)



//Do not remove this code
module.exports = { API }