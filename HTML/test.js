let x = 'hallo JavaScript my Alex my lowe program and DotA'
let sa = '' 
let y = 'bye'
let x1 = '12314124asd'
let x2 = '123s'

// charAt()
function test(n,ind,ki) {
    let arr = ''
    for (let i = 0; i < n.length; i++) {
        if (isNaN(parseInt(n.charAt(i)))) {
            return false
        }
        
    }
    return true
    
    
}
console.log(test(x2));