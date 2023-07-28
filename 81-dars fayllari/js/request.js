// const { rejects } = require("assert")
// const { resolve } = require("path")
// const { resourceUsage } = require("process")
// const { get } = require("request")

// const { error } = require("console") 

// api
const API = 'https://randomuser.me/api/?results=9'

// for loader
const overlay = document.getElementById('overlay')

// 4- toggle loader

const loaderToggle = (toggle)=>{
    if(toggle){
        overlay.classList.remove('hidden')
    }
    else{
        overlay.classList.add('hidden')
    }
}

//3-promise
const getData = (resource)=>{
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange',()=>{
            if(request.readyState<4){
               loaderToggle(true)
            }
            else if (request.readyState == 4 && request.status == 200){
                const data =JSON.parse(request.responseText)
                resolve(data.results )
                loaderToggle(false)
            }
            else if (request.request == 4){
                reject('error')
                loaderToggle(false)
            }
        })

        request.open('get',resource)
        request.send()
    })
}

// loda
const reload = ()=>{
    getData(API)
    .then((data)=>{
        updateUI(data)
    }).catch((err)=>{
        console.log(err)
    })
};
document.addEventListener('DOMContentLoaded',reload)