<template>
<div class="home">
    <!-- Hero Section -->
    <section class="hero">
        <div class="overlay">
            <img src="@/assets/img/hero.png" alt="Hero Image">
        </div>
    </section>
    <!-- Info Section -->
    <section class="info" id="about">
        <el-row :gutter="0">
            <el-col class="img-column" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="overlay"></div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16" class="about">
                <div class="overlay">
                    <div class="details">
                        <h2>Rewarding <br> Proof of <br> <strong>Tears</strong></h2>
                        <p>The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will power three steem-based social-network platforms namely; ULOGS.ORG, STEEMGIGS.ORG & MACROHARD, all of which apply a ‘mining the human’ model.
                        </p>
                        <p>En-route ‘mining the human into its awesomest version’, there is bound to many tears, whether happy, sad or un-fell. We intend to fix each tear with some teardrops, for tear has value.</p>
                        <a class="simple" v-smooth-scroll="{ duration: 700, offset: -100}" href="#video"><button class="outline">Find out more</button></a>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
    <!-- Video Section -->
    <section class="video" id="video">
        <el-row :gutter="0" class="pad-20 description-row">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="center">
                    <h2>The <strong>Teardrops Economy</strong></h2>
                    <p>
                        The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                        power three steem-based social-network platforms namely; ULOGS.ORG, STEEMGIGS.ORG &
                        MACROHARD, all of which apply a ‘mining the human’ model.
                    </p>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="0">
            <div class="flex-center center">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="video-container">
                        <youtube video-id="1PpG5hhlv44" player-width="100%"></youtube>
                    </div>
                </el-col>
            </div>
        </el-row>
    </section>
    <!-- Communities Section -->
    <section class="communities" id="communities">
        <div class="flex-center center">
            <div class="header-desc">
                <h2>Our <strong>Communties</strong></h2>
                <p>
                    The Teardrops token will be shared across multiple interfaces allow users to interact in multiple communities. These are the communities of Teardrops.
                </p>
            </div>
            <el-row :gutter="0">
                <div>
                    <el-col v-for="(community, index) in communities" :key="index" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                        <community :header="community.header" :desc="community.desc" :image="community.image" :active="community.active" :buttonText="community.buttonText" :url="community.url" />
                    </el-col>
                </div>
            </el-row>
        </div>
    </section>
    <!-- Certified Section -->
    <section class="certified flex-center" id="certified">
        <div class="overlay">
            <div class="details center pad-20">
                <h2>Get <strong>Certified</strong></h2>
                <p>
                    The entire teardrops SMT ecosystem is build around a grey-list of certified uloggers. This list will grow over the course of time and 'all value' will be built around this list. Each certified ulogger will have exclusive UI-perks across all three interfaces under the umbrella the teardrops ecosystem and a tangible say in the dynamics of the token
                </p>
                <a href="https://ulogs.org/dtube/@surpassinggoogle/syi5zn5a" target="_blank" rel="noopener noreferrer"><button class="primary">Get Certified</button></a>
            </div>
        </div>
    </section>
    <!-- Team Section -->
    <section class="team">
        <div class="center">
            <div class="details">
                <h2>Our <strong>Team</strong></h2>
                <p>
                    We have a large community of some 5,500 steemians. These ones will form a core part of our team. In coming months, we will begin to populate these page with core members of our team. Our team needs to represent 'teardrops', hence time must fly past.
                </p>
            </div>
            <el-row :gutter="0">
                <el-col v-for="(member, index) in team" :key="index" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                    <team :username="member.username" :position="member.position" :desc="member.desc" />
                </el-col>
            </el-row>
        </div>
    </section>
    <!-- Support Section -->
    <section class="support" id="support">
        <el-row :gutter="0">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="delegate">
                <div class="overlay">
                    <div class="pad-20 details">
                        <h2>Delegate <br> <strong>Steem Power</strong></h2>
                        <p>
                            Delegate steem power to '@steemgigs' to help support our curation and development efforts.
                        </p>
                        <a href="https://steem.tools/delegate/?delegatee=steemgigs&name=Steem+Gigs&www=https%3A%2F%2Fbusy.org%2F%40steemgigs&message=Steem+Gigs+is+a+platform+allowing+steemians+to+buy+and+sell+services+in+a+peer-to-peer+fashion.+Support+us+on+our+journey+with+your+delegation%21+Any+amount+is+appreciated%21" target="_blank" rel="noopener noreferrer"><button class="outline">Delegate Now</button></a>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="vote">
                <div class="overlay">
                    <div class="pad-20 details">
                        <h2>Vote <br> for <strong>us</strong></h2>
                        <p>
                            Our witness represent that "everyone has something to offer". You can vote for the 'steemgigs' witness to support us.
                        </p>
                        <a href="https://app.steemconnect.com/sign/account-witness-vote?witness=steemgigs&approve=1" target="_blank" rel="noopener noreferrer"><button class="outline">Vote Now</button></a>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
    <!-- Buy Section -->
    <section class="buy" id="buy">
        <div class="overlay">
            <div class="details">
                <h2>Buy <br> <strong>Teardrops</strong></h2>
                <p>
                  Teardrops are available today on Steem Engine, click the button below to get yours today. 
                </p>
                <a href="https://steem-engine.com/?p=market&t=TEARDROPS" target="_blank" rel="noopener noreferrer"><button class="outline">Buy Now</button></a>
            </div>
        </div>
    </section>
    <!-- Mail List Section -->
    <section class="mailing-list">
        <div class="pad-20 mail-container">
            <div class="mail-header">
                <h2><strong>Mailing</strong> List</h2>
                <p>
                    Use the the form below to register your email to keep up to date with updates and Teardrops events.
                </p>
            </div>
            <!-- Begin Mailchimp Signup Form -->
            <div id="mc_embed_signup">
                <form action="https://ulogs.us19.list-manage.com/subscribe/post?u=8857d3b21fbc07875a64874ac&amp;id=a737966e09" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <div class="mc-field-group">
                            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
                            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Enter Email">
                            </div>
                            <div id="mce-responses" class="clear">
                                <div class="response" id="mce-error-response" style="display:none"></div>
                                <div class="response" id="mce-success-response" style="display:none"></div>
                            </div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8857d3b21fbc07875a64874ac_a737966e09" tabindex="-1" value=""></div>
                                <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                                </div>
                </form>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import community from '@/components/community.vue'
import team from '@/components/team.vue'
export default {
    name: "home",
    components: {
        community,
        team
    },
    data() {
        return {
            communities: [{
                    header: 'Steem Gigs',
                    desc: 'A freelance market place built on the Steem Blockchain’. ',
                    image: require("@/assets/img/steemgigs.png"),
                    buttonText: 'Explore',
                    url: 'https://steemgigs.org',
                    active: true
                },
                {
                    header: 'Ulogs',
                    desc: 'The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. ',
                    image: require("@/assets/img/ulogs.png"),
                    buttonText: 'Explore',
                    url: 'https://ulogs.org',
                    active: true
                },
                {
                    header: 'Macrohard',
                    desc: 'Empowering developers all around the world’. ',
                    image: require("@/assets/img/macro.png"),
                    buttonText: 'Explore',
                    url: 'macrohard.pro',
                    active: true
                }
            ],
            team: [{
                    username: 'surpassinggoogle',
                    position: 'Founder',
                    desc: 'The founder and visonary behind the Teardrops token.'
                },
                {
                    username: 'eastmael',
                    position: 'Developer',
                    desc: 'Helping to build the future on Ulogs.'
                },
                {
                    username: 'tobias-g',
                    position: 'Developer',
                    desc: 'Developer and regular contributor to Steem Gigs platform.'
                }
            ]
        }
    }
};
</script>

<style lang="scss">
.home {
    .hero {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        background: #21142C;
        height: 65vh;
        background-image: url(../assets/img/friends.png);
        background-repeat: no-repeat;
        background-size: cover;

        .overlay {
            display: inherit;
            background: rgba(33, 20, 44, 0.75);
            height: 100%;
            width: 100%;

            img {
                width: 75%;
                display: block;
                margin: 175px auto auto auto;
                max-width: 750px;
            }
        }
    }

    .info {
        max-height: 450px;
        .img-column {
            background-image: url(../assets/img/computer-back.png);
            background-repeat: no-repeat;
            background-size: cover;
            max-height: 405px;
            .overlay {
                height: stretch;
                background: rgba(255, 255, 255, 0.75);
            }
        }

        .about {
            background-image: url(../assets/img/hands.png);
            background-repeat: no-repeat;
            background-size: cover;

            .overlay {
                background: rgba(95, 189, 216, 0.93);

                .details {
                    width: 75%;
                    max-width: 750px;
                    padding: 50px;
                    color: white;
                }
            }
        }
    }

    .video {
        background: linear-gradient(180deg, #F7F7F7 80%, #fff 00%);

        .description-row {
            width: 75%;
            max-width: 750px;
            margin: auto;
            display: block;
            padding-bottom: 0;

            h2 {
                color: rgba(95, 189, 216, 1);
            }
        }

        div {
            .video-container {
                padding: 20px;
                border-radius: 20px;
                background: #fff;
                width: fit-content;
                margin: auto;
                width: 75%;
                max-width: 750px;
            }
        }
    }

    .communities {
        .header-desc {
            width: 75%;
            max-width: 750px;
            margin: auto;
        }
    }

    .buy {
        background-image: url(../assets/img/buy.png);
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;
        background-position: center;

        .overlay {
            background: rgba(33, 20, 44, 0.75);

            .details {
                width: 35%;
                max-width: 750px;
                padding: 50px;
            }
        }
    }

    .support {
        color: #fff;

        .delegate {
            background-image: url(../assets/img/delegate.png);
            background-repeat: no-repeat;
            background-size: cover;

            .overlay {
                background: rgba(95, 189, 216, 0.93);

                .details {
                    width: 75%;
                    padding: 50px;
                }
            }

        }

        .vote {
            background-image: url(../assets/img/vote.png);
            background-repeat: no-repeat;
            background-size: cover;

            .overlay {
                background: rgba(71, 221, 175, 0.93);

                .details {
                    width: 75%;
                    padding: 50px;
                }
            }
        }
    }

    .team {
        .details {
            width: 75%;
            max-width: 750px;
            margin: auto;

            h2 {
                color: #5FBDD8;
            }
        }
    }

    .certified {
        background-image: url(../assets/img/collage.png);
        background-size: contain;
        color: #fff;

        .overlay {
            background: rgba(33, 20, 44, 0.93);

            .details {
                width: 75%;
                max-width: 750px;
                display: block;
                margin: auto;
            }
        }
    }

    .mailing-list {
        background: #F7F7F7;

        .mail-container {
            width: 75%;
            max-width: 750px;
            display: block;
            margin: auto;

            .mail-header {
                text-align: center;

                h2 {
                    color: #5FBDD8;
                }
            }

            form {

                label {
                    display: block;
                    font-size: 13px;
                }

                input[type="email"] {
                    padding: 10px;
                    width: 100%;
                    width: -moz-available;
                    /* WebKit-based browsers will ignore this. */
                    width: -webkit-fill-available;
                    /* Mozilla-based browsers will ignore this. */
                    width: stretch;
                    display: inline-block;
                    border: 1px solid #F7F7F7;
                }

                input[type="submit"] {
                    padding: 10px 12px;
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 5px;
                    background: #5FBDD8;
                    border-color: #5FBDD8;
                    display: inline-block;
                    width: 100%;
                    color: white;
                    margin-top: 15px;
                    cursor: pointer;
                }
            }

        }
    }
}

@media only screen and (max-width: 1250px) {
    .img-column {
        display: none;
    }
}

@media only screen and (max-width: 992px) {
    .pad-20 {
        padding: 20px;
    }
    .details {
        width: 75% !important;
    }
    .home .hero .overlay img {
        padding: 18px;
        width: 90%;
        min-width: initial;
    }
}
</style>
