const d=document
        $selectPrimary =d.getElementById("select-primary")
        $data =d.getElementById("data")

        function loadRegiones(){
            fetch("https://testservices.wschilexpress.com/georeference/api/v1.0/regions")
            .then(res=>res.ok?res.json():Promise.reject(res))
            .then(json =>{
                console.log(json);
                let $options=`<option value="">Elige una Region</option>`;
                json.regions.forEach(el => $options += `<option value="${el.regionId}">${el.regionName}</option>`);
                $selectPrimary.innerHTML = $options;
            })
            .catch(err=>{
                console.log(err);
                let message=err.statusText||"Ocurrio un error";
                $selectPrimary.nextElementSibling.innerHTML = `Error${err.status}:${message}`;
            });
        }

        function imprimirComunas(state){
            fetch(`https://testservices.wschilexpress.com/georeference/api/v1.0/coverage-areas?RegionCode=${state}&type=0`)
            .then(res=>res.ok?res.json():Promise.reject(res))
            .then(json =>{
                console.log(json);
                let body='';
                json.coverageAreas.forEach(el => body += `<tr><td>${el.countyName}</tr></td>`);
                document.getElementById('data').innerHTML = body;
            })
            .catch(err=>{
                console.log(err);
                let message=err.statusText||"Ocurrio un error";
                $selectPrimary.nextElementSibling.innerHTML = `Error${err.status}:${message}`;
            });
        }
        d.addEventListener("DOMContentLoaded", loadRegiones);
        $selectPrimary.addEventListener("change",e =>imprimirComunas(e.target.value));