var services = angular.module('fellowsApp.services', []);

services.factory('fellowsMap', function() {

    var fellows = [
        {
            name: "Abhishek Gadiraju",
            school: "UPenn",
            company: "Flatiron Health",
            pic: "abhishek.jpg"
        },
        {
            name: "Alex Wheeler",
            school: "Boston University",
            company: "Challenge Post",
            pic: "alex.jpg"
        },
        {
            name: "Amelia Winger-Bearskin",
            school: "NYU Tisch ITP",
            company: "Canary",
            pic: "amelia.jpg"
        },
        {
            name: "Calvin Chan",
            school: "UCLA",
            company: "Skillshare",
            pic: "calvin.jpg"
        },
        {
            name: "Catherine Moresco",
            school: "UChicago",
            company: "Oscar Health",
            pic: "catherine.jpg"
        },
        {
            name: "David Lu",
            school: "Carnegie Mellon",
            company: "ChatID",
            pic: "david.jpg"
        },
        {
            name: "Deepak Kumar",
            school: "U of Michigan",
            company: "REDI",
            pic: "deepak.jpg"
        },
        {
            name: "Emily Zhang",
            school: "MIT",
            company: "Oyster",
            pic: "emily.jpg"
        },
        {
            name: "Evan Casey",
            school: "Claremont McKenna College",
            company: "Tapad",
            pic: "evan.jpg"
        },
        {
            name: "Garrett Parrish",
            school: "Harvard",
            company: "Foursquare",
            pic: "garrett.jpg"
        },
        {
            name: "Hanne Paine",
            school: "Stony Brook",
            company: "Betterpath",
            pic: "hanne.jpg"

        },
        {
            name: "Jamis Johnson",
            school: "Columbia",
            company: "Seen.co",
            pic: "jamis.jpg"
        },
        {
            name: "Jennifer Nordquist",
            school: "UMD",
            company: "Undetermined",
            pic: "jenn.jpg"
        },
        {
            name: "Jian Shen Tan",
            school: "Brown and RISD",
            company: "Buzzfeed",
            pic: "js.jpg"
        },
        {
            name: "Jing Xiao",
            school: "Carnegie Mellon",
            company: "NextJump",
            pic: "jing.jpg"
        },
        {
            name: "Kenny Song",
            school: "NYU Shanghai",
            company: "Buzzfeed",
            pic: "kenny.jpg"
        },
        {
            name: "Kyle Johnson",
            school: "Rutgers New Brunswick",
            company: "Undetermined",
            pic: "kyle_johnson.jpg"
        },
        {
            name: "Kyle Ryan",
            school: "University of Rochester",
            company: "Instapaper",
            pic: "kyle_ryan.jpg"
        },
        {
            name: "Lea Marolt Sonnenschein",
            school: "Grinnell",
            company: "Matchbook",
            pic: "lea.jpg"
        },
        {
            name: "Lisa Luo",
            school: "Dartmouth",
            company: "Kickstarter",
            pic: "lisa.jpg"
        },
        {
            name: "Manuel Lopez (Manny)",
            school: "Rutgers",
            company: "Chartbeat",
            pic: "manny.jpg"
        },
        {
            name: "Maria van Keulen",
            school: "Columbia",
            company: "MongoDB",
            pic: "maria.jpg"
        },
        {
            name: "Matt Condon",
            school: "Louisiana Tech",
            company: "Magnetic",
            pic: "matt_condon.jpg"
        },
        {
            name: "Matt Dahl",
            school: "Pomona College",
            company: "Buzzfeed",
            pic: "matt_dahl.jpg"
        },
        {
            name: "Michael Garate",
            school: "NYU Gallatin",
            company: "Wildcard",
            pic: "michael.jpg"
        },
        {
            name: "Nina Freeman",
            school: "NYU Polytechnic",
            company: "Kickstarter",
            pic: "nina.jpg"
        },
        {
            name: "Patrick Facheris",
            school: "Columbia",
            company: "Magnetic",
            pic: "patrick.jpg"
        },
        {
            name: "Quinn Liu",
            school: "Virginia Tech",
            company: "AppNexus",
            pic: "quinn.jpg"
        },
        {
            name: "Sam Agnew",
            school: "Rutgers",
            company: "Ordrin",
            pic: "sam.jpg"
        },
        {
            name: "Sandile Keswa",
            school: "Temple University",
            company: "MeetUp",
            pic: "sandile.jpg"
        },
        {
            name: "Shiv Baijal",
            school: "U of Toronto",
            company: "Visa Issues",
            pic: "shiv.jpg"
        },
        {
            name: "Shyamal Ruparel",
            school: "U of Cincinnati",
            company: "DataDog",
            pic: "shy.jpg"

        },
        {
            name: "Sruti Modekurty",
            school: "Carnegie Mellon",
            company: "Birchbox",
            pic: "sruti.jpg"
        },
        {
            name: "Walter Menendez",
            school: "MIT",
            company: "MongoDB",
            pic: "walter.jpg"
        },
        {
            name: "Wayne Chang",
            school: "Rutgers",
            company: "Boardrounds",
            pic: "wayne.jpg"
        },
    ];

    return {
        get: function() {
            return fellows;
        }
    };
});