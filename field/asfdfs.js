var navWelcomeMarkup = '<span>Welcome, ' + obj.messages[0].firstName + '!</span>';

                        if ($('.page-header').length) {
                            $('.page-header .welcome-guest').html(navWelcomeMarkup);
                        } else {
                            $('.okl-header .welcome-guest').html(navWelcomeMarkup);
                        }

                        $signupModal.hide();
                        $('#modalSignup').hide();

                        if (obj.messages[0].refereeAward) {
                            var navCreditMarkup = '<li><a href="/account/credits-offers">My Credits $'+ obj.messages[0].refereeAward +'</a></li>';
                            $('.okl-header .welcome').after(navCreditMarkup);
                        }

                        /* begin Tealium */
                        if (obj.messages[0].customerId) {
                            var signupTmParam  = {
                                bucket: obj.messages[0].test_bucket,
                                is_user: "1",
                                is_shopper: "0",
                                recency_segment: "MNI",
                                page_type: "Registration Confirmation",
                                page_name: "Registration Confirmation",
                                customer_id: obj.messages[0].customerId
                            }
                            jQuery.extend(window.tmParam, signupTmParam);
                        }
                        /* end Tealium */

                        if ($('.joinC').length) {
                            $(location).attr('href','/#invite-friends');
                        } else {
                            OKL.Account.inviteModal.init(); //Put up viral loop invite modal, invite modal JS will take care of firing the Tealium pixel.
                        }