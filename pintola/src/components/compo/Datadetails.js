let shopourbest = [
    {
        "id": 1,
        "title": "High Protein Dark Chocolate Peanut Butter",
        "oldp":399,
        "price": 379,
        "image": "https://pintola.in/cdn/shop/files/CRUNCHY_82a27824-77c1-4d5c-a045-332d9d922e60_400x.jpg?v=1709807077",
        "variants":[{
            "v_id":1,
            "flavor":"crunchy",
            "size":"510gm",
            "price":379,
           },
           {
            "v_id":2,
            "flavor":"crunchy",
            "size":"1Kg",
            "price":711,
           },
           {
            "v_id":3,
            "flavor":"creamy",
            "size":"510gm",
            "price":379,
           },
           {
            "v_id":4,
            "flavor":"creamy",
            "size":"1Kg",
            "price":711,
           },
        ]
    },
    {
        "id": 2,
        "title": "All Natural Peanut Butter ",
        "oldp":175,
        "price": 166,
        "image": "https://pintola.in/cdn/shop/files/CREAMY_400x.jpg?v=1709806374",
        "variants":[{
            "v_id":1,
            "flavor":"creamy",
            "size":"350gm",
            "price":166,
           },
           {
            "v_id":2,
            "flavor":"creamy",
            "size":"1kg",
            "price":426,
           },
           {
            "v_id":3,
            "flavor":"creamy",
            "size":"2.5kg",
            "price":1021,
           },
           {
            "v_id":4,
            "flavor":"crunchy",
            "size":"350gm",
            "price":166,
           },
           {
            "v_id":5,
            "flavor":"crunchy",
            "size":"1kg",
            "price":426,
           },
           {
            "v_id":6,
            "flavor":"crunchy",
            "size":"2.5kg",
            "price":1021,
           },
           {
            "v_id":7,
            "flavor":"extra crunchy",
            "size":"350gm",
            "price":166,
           },
           {
            "v_id":8,
            "flavor":"extra crunchy",
            "size":"1kg",
            "price":426
           },
           {
            "v_id":9,
            "flavor":"extra crunchy",
            "size":"2.5kg",
            "price":426,
           },
        ]
    },
        

    {
        "id": 3,
        "title": "High Protein Dark Chocolate Otas",
        "oldp":349,
        "price": 332,
        "image": "https://pintola.in/cdn/shop/files/FirstImageHPOatsForwebsite-400g_400x.jpg?v=1709186086",
        "variants":[{
            "v_id":1,
            "size":"400g",
            "price":332,
        },
        {
            "v_id":2,
            "size":"1kg",
            "price":664,
        }
    ]
    },
    {
        "id": 4,
        "title": "Organic Wholegrain Brown Rice Cakes",
        "oldp":160,
        "price": 152,
        "image": "https://pintola.in/cdn/shop/products/Unsalted_400x.jpg?v=1670653747",
        "variants":[{
            "v_id":1,
           "flavor":"unsalted",
        },
        {
            "v_id":2,
            "flavor":"salted",
        },
        {
            "v_id":3,
            "flavor":"multigrain",
        },
        {
            "v_id":4,
            "flavor":"multigrain salted",
        }
    ]
    
    },
    
]
shopourbest =  shopourbest.map((items) => ({ ...items, quantity: 1 }))
console.log( shopourbest);







let newlylaunched = [
    {
        "id": 5,
        "title": "Dark Chocolate & Cranberry Muesli with 25% Millet",
        "oldp":285,
        "price": 270,
        "image": "https://pintola.in/cdn/shop/files/Muesli_ChocoBerryCrunch-350gm_600x600_bfff97d4-fadf-4c64-829d-904e0742893b_400x.jpg?v=1718364913",
      "variants":[
        {
            "v_id":1,
            "size":"320gm",
               "price":270,
        },
        {
            "v_id":2,
            "size":"800gm",
               "price":555,
        }
      ]
    },
    {
        "id": 6,
        "title": "Fruit & Nut Muesli with 68% Whole Grains",
        "oldp":295,
        "price": 280,
        "image": "https://pintola.in/cdn/shop/files/Muesli_Fruit_N_Nut-350gm_600x600_9f511e1f-82a9-470a-88e7-6b0df97f8619_400x.jpg?v=1718364969",
        "variants":[
            {
                "v_id":1,
                "size":"350gm",
                   "price":280,
            },
            {
                "v_id":2,
                "size":"800gm",
                   "price":569,
            }
          ]
    },
    {
        "id": 7,
        "title": "High Protein Dark Chocolate Oats",
        "oldp":349,
        "price": 332,
        "image": "https://pintola.in/cdn/shop/files/HPOats-400gm_600x600_8b96b4b1-778c-4558-838a-2ecb2be789a6_400x.jpg?v=1719222911",
        "variants":[
            {
                "v_id":1,
                "size":"400gm",
                   "price":332,
            },
            {
                "v_id":2,
                "size":"1kg",
                   "price":664,
            }
          ]
    },
    {
        "id": 8,
        "title": "Jumbo Rolled Oats",
        "oldp":199,
        "price": 189,
        "image": "https://pintola.in/cdn/shop/files/Jumbo_Rolled_Oats-400g_600x600_327d54b2-ffa1-45f2-85ac-cf2e8c946da0_400x.jpg?v=1718345327",
        "variants":[
            {
                "v_id":1,
                "size":"400gm",
                   "price":189,
            },
            {
                "v_id":2,
                "size":"1kg",
                   "price":403,
            }
          ]
    },
    {
        "id": 9,
        "title": "Wholegrain & Seeds Muesli with 33% Millet & 74% Whole Grains",
        "oldp":285,
        "price": 270,
        "image": "https://pintola.in/cdn/shop/files/Muesli_Whole_Grain_Seeds-350gm_600x600_05fdeae2-b6e8-42cd-b60b-5095a7060546_400x.jpg?v=1718365171",
        "variants":[
            {
                "v_id":1,
                "size":"350gm",
                   "price":270,
            },
            {
                "v_id":2,
                "size":"800gm",
                   "price":555,
            }
          ]
    },
]
newlylaunched =  newlylaunched.map((items) => ({ ...items, quantity: 1 }))
console.log( newlylaunched);

export {shopourbest,newlylaunched}
