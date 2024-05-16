<!---
docs: update README.md
---->

 <!-------------------------------------------------->
<!------------------------------------ PROJECT BANNER-->
 <!-------------------------------------------------->

 <p align="center">
 


  <img src="https://github.com/DIGOARTHUR/MediumAPI/assets/59892368/f200318e-f1f1-4f77-a061-0dc8f72154dc" alt="RFID-logo" />
  <br>
   <br>
  <i>Showcase your tech articles in your portfolio using the Medium API</i>
  <br>

</p>

 <br>
   <br>
 <!-------------------------------------------------->
 <!------------------------------------SHIELDS PROJECT-->
  <!-------------------------------------------------->
<div align="center">
    

 ![GitHub](https://img.shields.io/github/license/digoarthur/MediumAPI)

</div>

 <br>
  <br>


![image](https://github.com/DIGOARTHUR/MediumAPI/assets/59892368/e199319b-df96-4056-baff-39beb7a2f8c7)



  
 <!-------------------------------------------------->
 <!------------------------------------QUICK START-->
 <!--------------------------------------------------->

 ## 1. API

```
  https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Medium_Username
```

## 2.Request Example (REACT)

```jsx
    useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Medium_Username');
        const data = await res.json();
        const items = data.items;
        setDataMedium(items);

      } catch {
        console.log(true);
      }
    }

    fetchData();

  }, []);
```
## 3. DATA Props


```javascript
[
{

author: ,
categories: ,
content: ,
description: : ,
guid: ,
link: ,
pubDate: ,
thumbnail: ,
title: 

}
]
```

## 3. DEMO application


1. Repository Clone:

```
git clone https://github.com/DIGOARTHUR/MediumAPI.git
```

2. Install Dependecies

```
yarn 
or
npm 
```

3. Testing MEDIUM API
> [!NOTE]
> Don't forget to change the API Username


---

**Love Medium API Repository? Give our repo a star ⭐ ⬆️.**

`by`: [@digoarthur](https://www.linkedin.com/in/digoarthur/)


