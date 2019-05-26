var x=0,o=0;

onclick=()=>{

	var th= document.getElementsByTagName('th'), sp = document.getElementsByTagName('span'),dia= document.querySelector('dialog');

	var q=document.getElementById('q'),p= document.querySelector('p');



	const sh=()=>{

		th = document.getElementsByTagName('th');

		for(let i in th){

			try{

				th[i].innerHTML ='';

				th[i].setAttribute('id','');

				dia.style.top='-400px';

				y=1;

			} catch(x){}

		}

	}

	if(th[0].innerHTML==th[1].innerHTML&&th[0].innerHTML==th[2].innerHTML&&th[0].innerHTML!='') {

		q.style.display='block';

		p.innerHTML='The winner is';

		if(th[0].innerHTML == 'X') {

			dia.style.top=='100px' ? x : x++;

			q.innerHTML='X' ? q.innerHTML='X' : q.innerHTML='X';

		} else {

			dia.style.top=='100px' ? o : o++;

			q.innerHTML='O' ? q.innerHTML='O' : q.innerHTML='O';

		}

		dia.style.top='100px';

		dia.addEventListener('click',sh)

		for(let i=0; i<3; i++)

		th[i].setAttribute('id','a')

	} else if(th[3].innerHTML==th[4].innerHTML&&th[3].innerHTML==th[5].innerHTML&&th[3].innerHTML!=''){

		q.style.display='block';

		p.innerHTML='The winner is';

		if(th[3].innerHTML == 'X') {

			dia.style.top=='100px' ? x : x++;

						q.innerHTML='X' ? q.innerHTML='X' : q.innerHTML='X';

		}

		else {

			dia.style.top=='100px' ? o : o++;

			q.innerHTML='O' ? q.innerHTML='O' : q.innerHTML='O';

		}

		dia.style.top='100px';

		dia.addEventListener('click',sh)

		for(let i=3; i<6; i++)

		th[i].setAttribute('id','a')

	} else if(th[6].innerHTML==th[7].innerHTML&&th[6].innerHTML==th[8].innerHTML&&th[6].innerHTML!=''){

		q.style.display='block';

		p.innerHTML='The winner is';

		if(th[6].innerHTML == 'X') {

			dia.style.top=='100px' ? x : x++;

			q.innerHTML='X' ? q.innerHTML='X' : q.innerHTML='X';

		}

		else {

			dia.style.top=='100px' ? o : o++;

				q.innerHTML='O' ? q.innerHTML='O' : q.innerHTML='O';

		}

		dia.style.top='100px';

		dia.addEventListener('click',sh)

		for(let i=6; i<9; i++)

		th[i].setAttribute('id','a')

	} else if(th[0].innerHTML==th[3].innerHTML&&th[0].innerHTML==th[6].innerHTML&&th[0].innerHTML!=''){

		q.style.display='block';

		p.innerHTML='The winner is';

		if(th[0].innerHTML == 'X') {

			dia.style.top=='100px' ? x : x++;

			q.innerHTML='X' ? q.innerHTML='X' : q.innerHTML='X';

		}

		else {

			dia.style.top=='100px' ? o : o++;

			q.innerHTML='O' ? q.innerHTML='O' : q.innerHTML='O';

		}

		dia.style.top='100px';

		dia.addEventListener('click',sh)

		for(let i=0; i<8; i+=3)

		th[i].setAttribute('id','a')

	} else if(th[1].innerHTML==th[4].innerHTML&&th[1].innerHTML==th[7].innerHTML&&th[1].innerHTML!=''){

		q.style.display='block';

		p.innerHTML='The winner is';

		if(th[1].innerHTML == 'X') {

			dia.style.top=='100px' ? x : x++;

			q.innerHTML='X' ? q.innerHTML='X' : q.innerHTML='X';

		}

		else {

			dia.style.top=='100px' ? o : o++;

			q.innerHTML='O' ? q.innerHTML='O' : q.innerHTML='O';

		}

		dia.style.top='100px';

		dia.addEventListener('click',sh)

		for(let i=1; i<8; i+=3)

		th[i].setAttribute('id','a')

	} else if(th[2].innerHTML==th[5].innerHTML&&th[2].innerHTML==th[8].innerHTML&&th[2].innerHTML!=''){

		q.style.display='block';

		p.innerHTML='The winner is';

		if(th[2].innerHTML == 'X') {

			dia.style.top=='100px' ? x : x++;

			q.innerHTML='X' ? q.innerHTML='X' : q.innerHTML='X';

		}

		else {

			dia.style.top=='100px' ? o : o++;

			q.innerHTML='O' ? q.innerHTML='O' : q.innerHTML='O';

		}

		dia.style.top='100px';

		dia.addEventListener('click',sh)

		for(let i=2; i<9; i+=3)

		th[i].setAttribute('id','a')

	} else if(th[0].innerHTML==th[4].innerHTML&&th[0].innerHTML==th[8].innerHTML&&th[0].innerHTML!=''){

		q.style.display='block';

		p.innerHTML='The winner is';

		if(th[0].innerHTML == 'X') {

			dia.style.top=='100px' ? x : x++;

			q.innerHTML='X' ? q.innerHTML='X' : q.innerHTML='X';

		}

		else {

			dia.style.top=='100px' ? o : o++;

			q.innerHTML='O' ? q.innerHTML='O' : q.innerHTML='O';

		}

		dia.style.top='100px';

		dia.addEventListener('click',sh)

		for(let i=0; i<9; i+=4)

		th[i].setAttribute('id','a')

	} else if(th[2].innerHTML==th[4].innerHTML&&th[2].innerHTML==th[6].innerHTML&&th[2].innerHTML!=''){

		q.style.display='block';

		p.innerHTML='The winner is';

		if(th[2].innerHTML == 'X') {

			dia.style.top=='100px' ? x : x++;

			q.innerHTML='X' ? q.innerHTML='X' : q.innerHTML='X';

		}

		else {

			dia.style.top=='100px' ? o : o++;

			q.innerHTML='O' ? q.innerHTML='O' : q.innerHTML='O';

		}

		dia.style.top='100px';

		dia.addEventListener('click',sh)

		for(let i=2; i<7; i+=2)

		th[i].setAttribute('id','a')

	} else if(y==10) {

		q.style.display ='none';

		p.innerHTML ='Draw!';

		dia.style.top='100px';

		dia.addEventListener('click',sh)

	}

	sp[0].innerHTML =x;

	sp[1].innerHTML =o;

	//console.log(y)

}

let y=1;

function fu(box){

	b:{

		th= document.getElementsByTagName('th');

		box.innerHTML.length ? y : y++ ;

		if(box.innerHTML) break b;

			if(th[0].innerHTML==th[1].innerHTML&&th[0].innerHTML==th[2].innerHTML&&th[0].innerHTML!=''||th[3].innerHTML==th[4].innerHTML&&th[3].innerHTML==th[5].innerHTML&&th[3].innerHTML!=''||th[6].innerHTML==th[7].innerHTML&&th[6].innerHTML==th[8].innerHTML&&th[6].innerHTML!=''||th[0].innerHTML==th[3].innerHTML&&th[0].innerHTML==th[6].innerHTML&&th[0].innerHTML!=''||th[1].innerHTML==th[4].innerHTML&&th[1].innerHTML==th[7].innerHTML&&th[1].innerHTML!=''||th[2].innerHTML==th[5].innerHTML&&th[2].innerHTML==th[8].innerHTML&&th[2].innerHTML!=''||th[0].innerHTML==th[4].innerHTML&&th[0].innerHTML==th[8].innerHTML&&th[0].innerHTML!=''||th[2].innerHTML==th[4].innerHTML&&th[2].innerHTML==th[6].innerHTML&&th[2].innerHTML!='') break b;

			var td=document.getElementsByTagName('td');

		if(y%2===0) {

			m='X';

			box.style.color='#f90';

			box.style.textShadow='0 0 20px #fc4';

			td[1].style.color='#0ff';

			td[1].style.textShadow='0 0 19px #00f';

			td[1].style.fontWeight='900';

			td[0].style.color='white';

			td[0].style.textShadow='';

			td[0].style.fontWeight='100';

		} else{

			m='O';

			box.style.color='royalblue';

			box.style.textShadow='0 0 20px lightblue';

			td[0].style.color='#f55';

			td[0].style.textShadow='0 0 19px #00f';

			td[0].style.fontWeight='900';

			td[1].style.color='white';

			td[1].style.textShadow='';

			td[1].style.fontWeight='100';

		}

		box.innerHTML=m;

	}

}
