const all=document.querySelector('.all')

window.addEventListener('keydown',(e)=>{
    all.innerHTML=`
    <div>
    <table>
    <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${e.key===" "?"Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    </div>
    `
    console.log("clicked")
})