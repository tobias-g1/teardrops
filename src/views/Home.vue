<template>
<div class="home">
    <!-- Hero Section -->
    <section class="hero">
        <div class="overlay">
            <img src="@/assets/img/hero.png" alt="Hero Image">
        </div>
    </section>
    <!-- Info Section -->
    <section class="info">
        <el-row :gutter="0">
            <el-col class="img-column" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="overlay"></div>
            </el-col>
            <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16" class="about">
                <div class="overlay">
                    <div class="details">
                        <h2>Rewarding <br> Proof of <br> <strong>Tears</strong></h2>
                        <p>The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will power three steem-based social-network platforms namely; ULOGS.ORG, STEEMGIGS.ORG & MACROHARD, all of which apply a ‘mining the human’ model.
                        </p>
                        <p>En-route ‘mining the human into its awesomest version’, there is bound to many tears, whether happy, sad or un-fell. We intend to fix each tear with some teardrops, for tear has value.</p>
                        <button class="outline">Find out more</button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
    <!-- Video Section -->
    <section class="video">
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
                        <youtube video-id="57iAFUzXPGk"></youtube>
                    </div>
                </el-col>
            </div>
        </el-row>
    </section>
    <!-- Communities Section -->
    <section class="communities">
        <div class="flex-center center">
            <div class="header-desc">
            <h2>Our <strong>Communties</strong></h2>
            <p>
                The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                power three steem-based social-network platforms namely; ULOGS.ORG, STEEMGIGS.ORG &
                MACROHARD, all of which apply a ‘mining the human’ model.
            </p>
            </div>
            <el-row :gutter="0">
            <div>
                <el-col v-for="(community, index) in communities" :key="index" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    <community  :header="community.header" :desc="community.desc" :image="community.image" :active="community.active" :buttonText="community.buttonText" :url="community.url" />
                </el-col>
            </div>
        </el-row>
        </div>
    </section>
    <!-- Certified Section -->
    <section class="certified flex-center">
        <div class="overlay">
            <div class="details center pad-20">
                <h2>Get <strong>Certified</strong></h2>
                <p>
                    The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                    power three steem-based social-network platforms namely; ULOGS.ORG, STEEMGIGS.ORG &
                    MACROHARD, all of which apply a ‘mining the human’ model.
                </p>
                <button class="primary">Get Certified</button>
            </div>
        </div>
    </section>
    <!-- Team Section -->
    <section class="team">
        <div class="center pad-20">
            <h2>Our <strong>Team</strong></h2>
            <p>
                The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                power three steem-based.
            </p>
             <el-row :gutter="0">
            <el-col v-for="(member, index) in team" :key="index" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <team :username="member.username" :position="member.position" :desc="member.desc" />
            </el-col>
             </el-row>
        </div>
    </section>
    <!-- Buy Section -->
    <section class="buy">
        <div class="overlay">
            <div class="details pad-20">
                <h2>Buy <br> <strong>Teardrops</strong></h2>
                <p>
                    The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                    power three steem-based.
                </p>
                <button class="outline">Buy Now</button>
            </div>
        </div>
    </section>
    <!-- Support Section -->
    <section class="support">
        <el-row :gutter="0">
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="delegate">
                <div class="overlay">
                    <div class="pad-20 details">
                        <h2>Delegate <br> <strong>Steem Power</strong></h2>
                        <p>
                            The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                            power three steem-based.
                        </p>
                        <button class="outline">Delegate Now</button>
                    </div>
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="vote">
                <div class="overlay">
                    <div class="pad-20 details">
                        <h2>Vote <br> for <strong>us</strong></h2>
                        <p>
                            The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                            power three steem-based.
                        </p>
                        <button class="outline">Vote Now</button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
    <!-- Mail List Section -->
    <section>
        <div class="pad-20 flex-center center">
            <h2>Mailing List</h2>
            <p>
                The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                power three steem-based.
            </p>
        </div>
    </section>
</div>
</template>

<script>
import community from '@/components/community.vue'
import team from '@/components/team.vue'
export default {
    name: "home",
    data() {
        return {
            communities: [{
                header: 'Steem Gigs',
                desc: 'The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. ',
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
                url: 'www.google.com',
                active: true
            },
            {
                header: 'Macrohand',
                desc: 'The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. ',
                image: require("@/assets/img/macro.png"),
                buttonText: 'Coming Soon',
                url: 'www.google.com',
                active: false
            }],
            team: [{
                username: 'surpassinggoogle',
                position: 'Founder',
                desc: 'The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’'
            },
            {
                username: 'tobias-g',
                position: 'Developer',
                desc: 'The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’'
            },{
                username: 'eastmael',
                position: 'Developer',
                desc: 'The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’'
            }]
        }
    },
    components: {
        community,
        team
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
                width: 50%;
                display: block;
                margin: auto;
            }
        }
    }

    .info {
        .img-column {
            background-image: url(../assets/img/computer-back.png);
            background-repeat: no-repeat;
            background-size: cover;

            .overlay {
                height: 477.5px;
                background: rgba(255, 255, 255, 0.75);
            }
        }

        .about {
            background-image: url(../assets/img/hands.png);
            background-repeat: no-repeat;
            background-size: cover;

            .overlay {
                background: rgba(95, 189, 216, 0.9);

                .details {
                    width: 50%;
                    min-width: 400px;
                    padding: 50px;
                    color: white;
                }
            }
        }
    }

    .video {
        background: linear-gradient(180deg, #F7F7F7 80%, #fff 00%);
        .description-row {
            width: 50%;
            min-width: 400px;
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
            }
        }
    }

    .communities {
        .header-desc {
            width: 50%;
            min-width: 400px;
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
            min-width: 400px;
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
            background: rgba(95, 189, 216, 0.9);

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
            background: rgba(71, 221, 175, 0.9);

            .details {
                width: 75%;
                padding: 50px;
            }
        }
    }
}

.team {
    h2 {
        color: #5FBDD8;
    }
}

.certified {
    background-image: url(../assets/img/collage.png);
    background-size: contain;
    color: white;

    .overlay {
        background: rgba(33, 20, 44, 0.9);

        .details {
            width: 50%;
            min-width: 400px;
            display: block;
            margin: auto;
        }
    }
}
}
</style>
