export const getposts = (req, res, next) => {
    try {
        res.json({
            posts: [
                {
                    userId: 1,
                    title: 'Test Post',
                    slug: 'post-1',
                    content: '<h1 style="text-align: center;">The Benefits of Sleep</h1><p style="text-align: justify;">In today’s fast-paced world, many people underestimate the importance of a good night’s sleep. However, <span style="font-weight: bold; color: darkblue;">going to bed early</span> can have a profound impact on both your physical and mental well-being.</p><h2 style="text-align: center;">1. Improves Mental Health 🧠</h2><img src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="test" /> <p style="text-align: justify;">Sleep plays a crucial role in regulating mood and reducing stress. <span style="font-style: italic;">Lack of sleep</span> can lead to anxiety, depression, and irritability.On the other hand, sleeping early helps maintain emotional balance and promotes a <span style="font-weight: bold; color: darkblue;">happier life.</span></p><h2 style="text-align: center;">2. Boosts Physical Health 💪</h2><p style="text-align: justify;">During deep sleep, the body undergoes repair and regeneration. <span style="font-weight: bold; color: darkblue;">A consistent sleep routine</span> strengthens the immune system, reduces the risk of heart disease, and keeps the metabolism balanced.</p><h2 style="text-align: center;">3. Enhances Productivity & Focus 🎯</h2><p style="text-align: justify;">Sleeping early ensures you wake up refreshed and full of energy. <span style="font-style: italic;">A well-rested mind</span> is more productive, focused, and creative.</p><h2 style="text-align: center;">4. Encourages a Positive Lifestyle 🌱</h2><p style="text-align: justify;">Developing a habit of sleeping early leads to a healthier routine. It allows time for <span style="font-weight: bold; color: darkblue;">morning exercise</span>, mindful activities, and a balanced diet, all contributing to a <span style="font-weight: bold; color: darkblue;">happier life.</span></p><h2 style="text-align: center;">Conclusion</h2><p style="text-align: justify;">In conclusion, prioritizing sleep is one of the simplest yet most effective ways to improve overall well-being. <span style="font-weight: bold; color: darkblue;">Go to bed early</span>, wake up refreshed, and embrace a <span style="font-weight: bold; color: darkblue;">happier and healthier life.</span></p>',
                    image: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    category: "Sleep Benifits",
                    _id: "1",
                    createdAt: "2023-12-12T02:33:10.2582",
                    updatedAt: "2023-12-12T02:33:10.2582"
                },]
        })
    }catch(error) {
        console.log("Catch error: ", error)
    }
}