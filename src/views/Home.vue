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
        <el-row :gutter="0" class="pad-20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="center">
                    <h2>The Teardrops Economy</h2>
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
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/57iAFUzXPGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </el-col>
            </div>
        </el-row>
    </section>
    <!-- Communities Section -->
    <section class="communities">
        <div class="flex-center center">
            <h2>Our Communties</h2>
            <p>
                The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                power three steem-based social-network platforms namely; ULOGS.ORG, STEEMGIGS.ORG &
                MACROHARD, all of which apply a ‘mining the human’ model.
            </p>
        </div>
    </section>
    <!-- Certified Section -->
    <section class="certified">
        <div class="flex-center center pad-20">
            <h2>Get Certified</h2>
            <p>
                The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                power three steem-based social-network platforms namely; ULOGS.ORG, STEEMGIGS.ORG &
                MACROHARD, all of which apply a ‘mining the human’ model.
            </p>
            <button class="primary">Get Certfied</button>
        </div>
    </section>
    <!-- Team Section -->
    <section class="team">
        <div class="flex-center center pad-20">
            <h2>Our Team</h2>
            <p>
                The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                power three steem-based.
            </p>
            <button class="primary">Get Certfied</button>
        </div>
    </section>
    <!-- Buy Section -->
    <section class="buy">
        <div class="flex-center pad-20 center">
            <h2>Buy Teardrops</h2>
            <p>
                The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                power three steem-based.
            </p>
            <button class="outline">Buy Now</button>
        </div>
    </section>
    <!-- Support Section -->
    <section>
        <el-row :gutter="0">
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <div class="pad-20">
                    <h2>Delegate Steem Power</h2>
                    <p>
                        The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                        power three steem-based.
                    </p>
                    <button class="outline">Delegate Now</button>
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <div class="pad-20">
                    <h2>Vote for us</h2>
                    <p>
                        The teardrops SMT is an emblem of human & breakthrough token to reward ‘proof of tears’. It will
                        power three steem-based.
                    </p>
                    <button class="outline">Vote Now</button>
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
export default {
    name: "home"
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
                height: 489px;
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
}
</style>
