---
name: The World Bank's Aid in Sri Lanka's Economic Meltdown
tools: [MySQL, Data Analysis, Article Writing]
image: "https://i.postimg.cc/qqTfqxz6/crisismain.jpg"
description: Conducted comprehensive financial analysis for the World Bank's aid during Sri Lanka's economic crisis, & identified the financial & accounting landscape during the period.
---

![Preview](https://i.postimg.cc/qqTfqxz6/crisismain.jpg)


Probably one of the worst economical crisis any country could face in the 21st century, it happened in Sri Lanka. Like a fusillade towards a building, the economy of Sri Lanka was taking heavy damage from debts and consequences of bad decisions. A price paid by the citizens of Sri Lanka.

This didn't strongly seem to happen back in 2019 when Gotabaya Rajapaksa won the election with majority and became the President of Sri Lanka. People were celebrating and no one imagined an incoming crisis could fall upon them, and to push even further down into the abyss, a natural disaster.

Imagine a ticking clock, inside the back of your mind.

## 2019

While the country was still grieving from its loss of 250 citizens from terrorists attacks in mid April 2019, elections took place and Gotabaya Rajapaksa became 'The President of Sri Lanka' who also happens to end the 26 year old civil war of Sri Lanka and pushed the country into heavy debt to China. In his first cabinet meeting, he introduced tax cuts with low interest rates. The taxpayers took a massive hit when the GDP of Sri Lanka fell down (the Tax-GDP ratio didn't support) and country's debt to China was too much to bear.

## 2020

Amidst these debt payments and tax cuts, the government faced shortages of fuel and then came COVID. Tourism got shattered, imports and exports entirely came to a halt, this made the lives of citizens much worse and COVID-spread increased health costs. Sri Lanka was running out of federal reserves very quickly. Parts of Sri Lanka then faced immense flooding for weeks in the end of the year destorying homes, agricultural fields and infrastructure. Power outages became more frequent.

## 2021

By April 2021 to reduce the drain of foreign reserves, the goverment entirely banned the imports and use of chemical/synthetic fertilizers which forced farmers to use organic means of farming, this crippled rice and crop yields. The government failed to supply subsidies and money to farmers. Meeting food shortage demands from abroad costed them too much. The foreign debts of Sri Lanka in 2021 summed upto staggering ~$56.5 billion USD. One more severe flood struck in 2021 stranding many citizens.

## 2022

Sri Lanka announced it has defaulted in April 2022 on foreign trade with immense debt of $86.6 billion US of which $4.2 billion US is a debt to China, while its foreign reserves were mere US$1.9 billion. Mass resignations happened within his administration and there were no ministers in the cabinet. Civil unrest at its worst and the crisis became a world issue. Sri Lanka sought for help from foreign banks and neighbouring countries like India and China. India disbursed US$ 1 billion to help Sri Lanka fight its crisis. World Bank and IMF said yes to help Sri Lanka fight the economic crisis. By this time in July 2022, president Rajapaksa fled the country and resigned. Governements changed after political and citizens' anger in hopes to restoring some order. 

## World Bank's Role

I read a news flash around June 2022, world bank disbursed first aid to Sri Lanka. Now, when I look back and after finding the dataset through Avery's bootcamp. I thought let me look into this crisis. I went to World Bank's official website and downloaded the updated dataset that includes the history of all credits and grants in world bank. One can find the dataset [here](https://finances.worldbank.org/Loans-and-Credits/IDA-Statement-Of-Credits-and-Grants-Historical-Dat/tdwh-3krx/about_data). The data also has meta data/description of each column such as End of Period, Country, Original Principal Amount, Project Name, Project ID, Credit Number, Credit Status etc.

### The Analysis

I had lot of questions regarding this data. The data actually has ~1.25 million rows and about 30 columns. Each row is either a credit or grant, in other words a transaction. Importing this data into excel will make life harder. I used MySQL instead. I used the follwoing code to load the dataset into my MySQL server:

<script src="https://gist.github.com/Krishna1594/9a8c206d4eac5a6df4463d017eb50b10.js"></script>


Once I loaded my data, I saw that the data contains historical transactions and it gets updated frequently. The data may look like having duplicate rows but its just gets updated every month. So, I needed the data of latest update. I could extract latest update using the following code:

<script src="https://gist.github.com/Krishna1594/ac5df96be7e61c1faa4003a6b41d8790.js"></script>

Now, my data is loaded into MySQL database properly and I renamed my columns for ease of access. I began my analysis by asking follwoing questions:

1) How much did World Bank disburse in total to help Sri Lanka?

2) In what projects did they disburse and to provide a simple breakdown by sector?

3) What are top projects in which World Bank helped Sri Lanka, based on original principal amount agreed?

4) At what average interest did World Bank charge Sri Lanka?

5) How much does Sri Lanka owe World bank?

6) Which projects did Sri Lanka fully repaid and when?

Before I could work on the data I wanted to know what kind of projects did World Bank came up with to help Sri Lanka. I did some research and got to know the following project names and abbreviations:

1) KMTT: Kandy Multimodal Transport Terminal. A transportation development project.

2) IWWRMP: Integrated Watershed and Water Resources Management Project. A water resource project.

3) DFCC: Development Finance Coporation of Ceylon. A finance assistance project.

4) IDP: Industrial Economic Development Project and Support.

5) ERCPMEA: Economic Restructuring Credit and Public Manufacturing Enterprises Adjustments Credit Projects.

6) RERED: Renewable Energy for Rural Economic Development Project

7) PRSC: Poverty Reduction Strategy Credit.

And there are subprojects completed in phases which are well described in the dataset. Then I began finding insights. There are over 100 countries and I cannot possibly analyze all countries at once. So, I quickly narrowed down which countries are actually in debt by using following code highlighting amount received and dues of each country:

<script src="https://gist.github.com/Krishna1594/0d603c083ad97b57cdf3ad7f1854b1d2.js"></script>

Result looks as follows

![](https://i.postimg.cc/rFyKLkCS/result1.png) 

I chose Sri Lanka, one of my (India) neighboring countries. I began answering my questions:

1) How much did World Bank disburse in total to help Sri Lanka?

I used the following code to extract the total amount World Bank has given to assist Sri Lanka:
<script src="https://gist.github.com/Krishna1594/7909666c8266a2e475a076d0db32896b.js"></script>
We can see that World Bank initially sought out to grant a sum of **$6,410,673,836.57 US** in total and actually disbursed a total of **$5,221,628,055.05 US** in phases to assist Sri Lanka.

2) In what projects did they disburse and to provide a simple breakdown by sector?

For this question, I learnt what the projects are and was able to break down based on sectors: Economic and Finance, Agriculture, Health, Transportation & Water Resources and Climate Resilience. Sri Lanka requested other grants for the Urban and Rural Development, Power, Education, social and environment protection. Based on the above briefing before my analysis, following are my findings.

#### Econominc & Finance Assistance

In this dataset, there are lot of transactions per project and project name has some keywords. I tried to filter appropriate projects based on key words but also making sure they fall under respective grants which I mentioned earlier in terms of projects and their abrreviations. Thus, I wrote it as:
<script src="https://gist.github.com/Krishna1594/94f8f106e916a6a73b2d5ee7725262c4.js"></script>
This gave me the total Economic & Finance aid for Sri Lanka's projetcs given by World Bank, which is **$633,935,207.48 US**. This is around **12.14%** of total aid disbursed to Sri Lanka.

#### Agriculture

Similarly, I used the same idea to calculate the total amount disbursed to Sri Lanka for Agricultural aid. The aid given by World Bank is **$423,864,727.89 US** and it is **8.12%** of total aid disbursed during the crisis.

#### Health

I used the same idea to calculate the total amount disbursed to Sri Lanka for Health aid. The aid given by World Bank is **$495,307,112.15 US** and it is **9.49%** of total aid disbursed during the crisis. 

#### Transportation & Water Resources Aid

Again, I used the same method to calculate the total amount disbursed to Sri Lanka for Transportation and Water Resource Management grant. The aid given by World Bank is **$530,386,252.94 US** and it is **10.16%** of total aid disbursed during the crisis.

#### Climate Resilience Grant

For this sector, I noticed that one project is being wrongly included in the code so I had to exclude those kind of projects that don't fall under climate resilience grant. This issue occured because the same key word was present in one of the agricultural grant. Thus, I modified my code using "NOT LIKE":
<script src="https://gist.github.com/Krishna1594/d24b7e96316692bc64e676d6b4ce83cf.js"></script>
The grant sums up to **$210,573,277.14 US** which is **4.03%** of total aid disbursed during the crisis. 

The total amount of the above mentioned grants is **$2,294,066,577.60 US** and these grants make-up about **43.93%** of total aid disbursed during the crisis.

3) What are top projects in which World Bank helped Sri Lanka, based on original principal amount agreed?

For this question, I wrote up a code using ORDER BY but with a LIMIT of 10 rows. I needed top 10 projects being undertaken by World Bank's aid. The code is as follows:
<script src="https://gist.github.com/Krishna1594/bb9231c5771cb2cf6e5c6b0d31218f4a.js"></script>

Output:
![](https://i.postimg.cc/y6GrMFRB/top10.png)

As we can see that most of the grants in this list are for financial growth, health, agriculture and transportation assistance.

4) At what average interest did World Bank charge Sri Lanka?

I used the following code and found out that the average interest at which the world bank granted loans is **1.51%** of the disbursed amount;
<script src="https://gist.github.com/Krishna1594/85c75cfa90dbbae58ef415f94c32e818.js"></script>

5) How much does Sri Lanka owe World bank?

Out of **$5,221,628,055.05 US received from world bank, Sri Lanka still owes **$3,031,516,574.47 US** till date which is **58.05%** of the disbursed amount.

6) Which projects did Sri Lanka fully repaid and when?

For this question, I utilized WHERE ... AND... clause together to narrow down fully repaid loans as per latest snapshot of the dataset.
<script src="https://gist.github.com/Krishna1594/5b8f92051d0639907e60396c0ae917eb.js"></script>

Output:
![](https://i.postimg.cc/WbLb2JLL/repaid.png)

The above result shows that Sri Lanka was able to repay its agricultural loans showing some kind of potential improvement in food supply. I noticed that the first grant was made during June 2022 and Sri Lanka repaid these grants by August 2022. That is commendable. The policies and the agreements between Sri Lanka and World Bank proved to be fruitful in this mannaer.

Now that my analysis is complete, I can use the following code to expunge my temporary table which I created initially for this analysis. I saved this whole script first and then dropped my table using,
```mysql
DROP TEMPORARY TABLE Latest;
```
This concludes my analysis. Furthermore as I looked into the dataset, I found out that the government is actively repaying and it has received USD 500 million from India as an extended credit line for fuel purposes and Canada sent $3 million USD to help communities in Sri Lanka.

## Conclusion

MySQL has proved to be very efficient in sorting, filtering and querying throughout this dataset. Actually, I was keen enough to look how much time MySQL took to import this data. It took 18.65 seconds to import whole dataset while all my queries were happeining in an instant, ~0.063 seconds.

One feeling here is that, I can find a workaround and maybe reduce the length of codes and execution time here in the end. The best part of my analysis here was ALTER TABLE and UPDATE to format and index columns which helped me to sort and aggregate fields in the dataset. Without them, the results were ambigious. Indexing does improve the effeciency and reliability of the code.

This project is avaiable on my Github profile through [here](https://github.com/Krishna1594/World-Bank-Role-in-Sri-Lanka-Economic-Meltdown). I am open to feedback and any suggestions that you think will help me in making this project better.

## Sources

Data: World Bank - [here](https://finances.worldbank.org/Loans-and-Credits/IDA-Statement-Of-Credits-and-Grants-Historical-Dat/tdwh-3krx/about_data)

(1) World Bank - [link](https://projects.worldbank.org/en/projects-operations/projects-summary?lang=en&countrycode_exact=LK)

(2) Observer Research Foundation - [link](https://www.orfonline.org/research/understanding-the-economic-issues-in-sri-lanka-s-current-debacle#:~:text=This%20paper%20discusses%20six%20key,the%20downfall%20of%20the%20tourism)

(3) CNN - [link](https://www.cnn.com/2022/04/05/asia/sri-lanka-economic-crisis-explainer-intl-hnk/index.html)

(4) BBC - [link](https://www.bbc.com/news/world-61028138)

(5) Aljazeera - [link](https://www.aljazeera.com/economy/2022/4/28/how-a-powerful-dynasty-bankrupted-sri-lanka-in-30-months)

(6) Government of Canada - [link](https://www.international.gc.ca/country_news-pays_nouvelles/2023-01-06-sri_lanka.aspx?lang=eng)
























