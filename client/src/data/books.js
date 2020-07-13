const books = [
        {
        id: "1",
        title: "Book 1",
        author: "Author 1",
        text: "Suspendisse imperdiet, eros vel tempus faucibus, mi turpis consequat massa, eu aliquet mi nibh eu ipsum. Ut sollicitudin non leo blandit gravida. Donec sed quam in felis malesuada fermentum. Curabitur vitae gravida magna, eget porttitor enim. Ut ut odio suscipit, commodo nisiid laoreet eros. Cras suscipit varius vestibulum. Sed vel ultricies orci. Maecenas sit amet nisi in augue eleifend congue. Quisque feugiat ac lorem quis mattis. Maecenas ultricies mattis ultricies. Curabitur pellentesque laoreet rutrum. Nunc suscipit tristique volutpat. Aenean bibendum, enim ut lobortis tristique, elit elit eleifend nibh, eget consectetur ipsum leo at lacus. In neque sem, condimentum eget felis non, vulputate molestie enim. Donec accumsan sem eu sem suscipit placerat Donec non felis lectus. Vestibulum maximus eu arcu porta egestas. Nullam ut tincidunt nisl. Aenean tempus, sem et fringilla congue, diam risus consectetur lorem, eget rhoncus lorem magna eget massa. Nullam mattis, libero nec malesuada lacinia, augue tellus viverra eros, vitae posuere felis nisi et lorem. Nulla facilisi. Ut iaculis dapibus massa, vitae commodo elit rhoncus eu. Curabitur faucibus et risus vitae venenatis. Etiam posuere nisi ac maximus convallis. Ut consectetur ornare ornare. Etiam ac augue quis lectus mollis gravida vel in nulla. Morbi eu nulla in nulla porta volutpat. Quisque vitae ultrices velit. Praesent eget ultrices felis, non ullamcorper tellus. Nam interdum, lectus in aliquet mattis, justo ex mattis turpis, vitae pellentesque elit dui laoreet odio."
        },
        {
            id:"2",
            title:"Book 2",
            author:"Author 2",
            text:"Invent the universe explorations from which we spring Hypatia extraordinary claims require extraordinary evidence permanence of the stars. Network of wormholes prime number citizens of distant epochs the ash of stellar alchemy Euclid hearts of the stars? A very small stage in a vast cosmic arena Orion s sword emerged into consciousness citizens of distant epochs the only home we ve ever known the sky calls to us. Citizens of distant epochs concept of the number one are creatures of the cosmos two ghostly white figures in coveralls and helmets are softly dancing with pretty stories for which there s little good evidence a very small stage in a vast cosmic arena?"
        },
        {
            id:"3",
            title:"Book 3",
            author:"Author 3",
            text:"Cupcake ipsum dolor sit. Amet donut cupcake dessert I love icing. Chupa chups cake danish bonbon icing jelly beans marshmallow cotton candy. Macaroon powder jelly-o. Brownie chocolate tootsie roll. Sesame snaps sugar plum chocolate bar. Chocolate bar marshmallow ice cream candy gummies cupcake jujubes. Cotton candy biscuit cake sweet roll soufflé jujubes. Apple pie chupa chups pudding sweet I love. Cake I love cheesecake donut lollipop chocolate cake. Chocolate sweet roll I love carrot cake sweet. Chocolate cake candy apple pie jelly-o marzipan. Croissant cheesecake marshmallow tiramisu. I love cake cookie bear claw I love halvah bonbon."
        },
        {
            id:"4",
            title:"Book 4",
            author:"Author 4",
            text:"I love cheese, especially cow cheeseburger. Danish fontina halloumi mascarpone rubber cheese cheese strings lancashire fromage babybel. Say cheese blue castello taleggio airedale croque monsieur dolcelatte squirty cheese cottage cheese. Cheesy feet parmesan cow hard cheese smelly cheese st. agur blue cheese cottage cheese chalk and cheese. Cut the cheese say cheese cut the cheese halloumi say cheese queso everyone loves edam. Manchego hard cheese stilton red leicester cottage cheese cheeseburger cheesy grin cheesecake. Taleggio babybel dolcelatte fromage parmesan jarlsberg say cheese ricotta. Brie danish fontina fromage blue castello fondue macaroni cheese"
        },
        {
            id:"5",
            title:"Book 5",
            author:"Author 5",
            text:"I m baby keffiyeh raclette meditation, chillwave wolf taiyaki deep v man braid +1 vexillologist jianbing. Wayfarers copper mug pitchfork, pour-over chillwave hammock direct trade mumblecore scenester PBR&B coloring book street art. Kombucha vegan coloring book hexagon, forage vape listicle lomo plaid intelligentsia cronut farm-to-table pop-up lumbersexual fam. VHS migas locavore brunch skateboard tousled kogi kale chips portland man bun hell of jean shorts activated charcoal enamel pin. Viral glossier neutra, paleo shaman blog meh art party letterpress seitan"
        },
        {
            id:"6",
            title:"Book 6",
            author:"Author 6",
            text:"Pre launch take five, punch the tree, and come back in here with a clear head, nail jelly to the hothouse wall accountable talk level the playing field, for keep it lean but let s schedule a standup during the sprint to review our kpis. Criticality zeitgeist we re ahead of the curve on that one. Prioritize these line items overcome key issues to meet key milestones value-added, so work pre launch. Pre launch what do you feel you would bring to the table if you were hired for this position, yet hire the best. Powerpoint Bunny it s not hard guys drink the Kool-aid, or knowledge is power i need to pee and then go to another meeting. Market-facing 60% to 30% is a lot of persent and we need a recap by eod, cob or whatever comes first. Where do we stand on the latest client ask circle back so peel the onion but bleeding edge, nor digitalize put your feelers out. Big picture this vendor is incompetent . Show pony a set of certitudes based on deductions founded on false premise for high touch client nor we need to touch base off-line before we fire the new ux experience groom the backlog. Onward and upward, productize the deliverables and focus on the bottom line those options are already baked in with this model, so low engagement, thought shower optics. Vec big boy pants for accountable talk. Drill down we ve bootstrapped the model 60% to 30% is a lot of persent so i ll book a meeting so we can solution this before the sprint is over it just needs more cowbell timeframe. We need to button up our approach ladder up / ladder back to the strategy. Radical candor gain traction Q1 put it on the parking lot and on-brand but completeley fresh. Quick-win we need to make the new version clean and sexy. Who s the goto on this job with the way forward customer centric we need to touch base off-line before we fire the new ux experience best practices"
        },
        {
            id:"7",
            title:"Book 7",
            author:"Author 7",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iniddictum neque, sit amet blandit lacus. Pellentesque sem est, varius scelerisque blandit vel, placerat vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum nec mollis magna, a euismod mauris. Pellentesque mollis metus lectus, vitae pulvinar odio vestibulum in. Sed accumsan viverra justo, eu bibendum mi finibus ut. Nam a leo in sem consequat rhoncus. Donec dapibus, diam eget suscipit tincidunt, erat leo vestibulum ante, in rhoncus dolor neque vel nunc"
        },
        {
            id:"8",
            title:"Book 8",
            author:"Author 8",
            text:"Proin sollicitudin congue odioidtempor. Integer nisi libero, luctus et risus vel, mollis mattis felis. Phasellus lobortisidnunc pellentesque rutrum. Donec non tempor dolor, in pulvinar nisl. Cras ac euismod est, eget vulputate neque. Nunc venenatis magna a odio feugiat, ac vulputate lorem lobortis. Suspendisse eu tellus ultrices, luctus orci vitae, lacinia nisi. In ut mi ante. Cras et finibus risus. Ut in risus quis orci pellentesque ultrices. Aliquam lobortis posuere anteidvolutpat. Praesent eu ante at turpis ornare lobortis et et erat. Duis ultrices, nunc quis luctus suscipit, lorem eros interdum massa, ut laoreet nibh felisidodio. Quisque et condimentum magna"
        },
        {
            id:"9",
            title:"Book 9",
            author:"Author 9",
            text:"Candy canes donut macaroon I love marzipan toffee biscuit. Marshmallow croissant cake jelly gummies. Powder chupa chups dessert tootsie roll. Toffee danish lemon drops. Marshmallow danish ice cream pastry. Biscuit bear claw jelly-o I love bear claw chocolate cake I love"
        },
        {
            id:"10",
            title:"Book 10",
            author:"Author 10",
            text:"Taleggio everyone loves cheese triangles. Brie airedale cheesy feet ricotta smelly cheese cheesy grin ricotta cottage cheese. Chalk and cheese caerphilly cut the cheese manchego st. agur blue cheese hard cheese mozzarella roquefort. Cheese triangles when the cheese comes out everybody s happy cream cheese chalk and cheese airedale"
        }
]

export default books