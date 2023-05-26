console.log("Welcome to spotify");

//Variable initialize
let songIndex = 0;
let audioElement = new Audio('newSongs/Dhairya.mp3');
let progress;

let playPause = document.getElementById("playPause");
let nextButton = document.getElementById("next");
let backButton = document.getElementById("back");
let myProgressBar = document.getElementById("myProgressBar");
let GIF = document.getElementById("gif");
let equalizer = document.getElementById("equalizer");
let backGround = document.getElementById("BG");
let lyricsIcon = document.getElementById("lyricsIcon");
let lyrics = document.getElementsByClassName("lyrics")[0];

let songItems = Array.from(document.getElementsByClassName("songItems"));
// let songItemPlayButton = Array.from(document.getElementsByClassName("timeStamp"));
let songItemPlayButton = Array.from(document.getElementsByClassName("songItems"));

// const icons = [{
//     lyricsOff : "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path d=\"M0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z\"/></svg>",
//     lyricsOn : "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path d=\"M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z\"/></svg>",
//     play : "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z\"/></svg>",
//     pause : "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24z\"/></svg>",
//     next : "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path d=\"M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z\"/></svg>",
//     previous : "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path d=\"M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z\"/></svg>",


// }]

const songLyrics = [{
    Dhairya: "तिम्रो र मेरो, हाम्रो कथाको...<br> तिम्रो र मेरो, हाम्रो कथाको...<br> तिम्रो र मेरो, हाम्रो कथाको शीर्षक 'धैर्य' बनिसकेछ<br> तिम्रो र मेरो, हाम्रो कथाको...<br> तिम्रो र मेरो, हाम्रो कथाको...<br> तिम्रो र मेरो, तिम्रो र मेरो, शीर्षक 'धैर्य' बनिसकेछ<br> बोलीले तिमीलाई तर्साए नबोली नै बसौँ न, मायालु <br> वचनले तिमीलाई झस्काए कसम नखाइदिउँला म बरु<br> तिम्रो लालीले अँगाली लैजाऊ न मलाई<br> अतासिँदै ढुकढुकाउने ढुकढुकीको बासमै<br> चाहिएजति लेऊ समय तिम्रो बोली, आवाजलाई<br> मेरो नामका यी लबज सिकाउन<br> धैर्य सिकी बसुन्जेल म केहीबेर लागे केही छैन<br> तिम्रो मनलाई मेरो याद आउन<br> तिमीले हात यो नचिने अल्झाई बसौँ, माया, एकैछिन<br> औँला यी बुनेरै राखेसरि चिन्छौ कि स्पर्श मेरो कुनै दिन?<br> मेरा भाका राखिराख तिम्रा ओठ बीचमै<br> ती ओठले आफैआफ गुनगुनाउने गीतझैँ<br> चाहिएजति लेऊ समय तिम्रो बोली, आवाजलाई<br> मेरो नामका यी लबज सिकाउन<br> धैर्य सिकी बसुन्जेल म केहीबेर लागे केही छैन<br> तिम्रो मनलाई मेरो याद आउन<br> माया, धेरैबेर लगाएर तिमीकहाँ आएँ म<br> अबदेखिन् सधैँसम्म तिमीलाई माया गर्छु<br> र मुटु मेरो टुक्रिए यही टुक्रिएकै मुटु<br> मेरो हृदयमा धड्कुन्जेल तिमीलाई म पर्खन्छु<br> धेरैबेर लगाएर तिमीकहाँ आएँ म<br> अबदेखिन् सधैँसम्म तिमीलाई माया गर्छु<br> र मुटु मेरो टुक्रिए यही टुक्रिएकै मुटु<br> मेरो हृदयमा धड्कुन्जेल तिमीलाई म पर्खन्छु<br> ",
    BirsineyHauKi: "मुस्कान, तिम्रो मुस्कान  याद भो<br> घाम ढल्केझैँ मन अँध्यारो भो<br> तस्बीर, तिम्रो तस्बीर बाँकी भो<br> सपनामा तर्सेझैँ मन आत्तियो<br> ओत लिए बर्सियो झरी<br> सिमसिमे पानी लाग्छ बाढी<br> कतै फर्किन्छौ त मतिरै तिमी?<br> आजले हिजो बिर्सेझैँ बिर्सिने हौ कि?<br> चञ्चल, यो चञ्चल मन तिम्लाई नै खोज्छ<br> भेट्दैन जब अनि याद खोतल्छ<br> हाम्रा दुई आँखा लुकामारी खेल्छन्<br> जूनले घाम नचिनेझैँ चिन्दैनन्<br> चुट्टेको डोरीलाई के-कसरी बाँध्ने?<br> साट्ने हो, कि यो माया नै त्यागिदिने?<br> समय चाहिए लेऊ, घडी नै रोकिदिएँ<br> आजले हिजो बिर्सेझैँ बिर्सिने हौ कि?<br> Ooh, ooh, ooh, ooh-ooh-ooh-ooh<br> Oh, oh, oh, oh-oh-oh-ooh<br> ओत लिए बर्सियो झरी<br> साट्ने हो, कि यो माया नै त्यागिदिने?<br> कतै फर्किन्छौ त मतिरै तिमी?<br> आजले हिजो बिर्सेझैँ बिर्सिने हौ कि?<br> आजले हिजो बिर्सेझैँ बिर्सिने हौ कि?<br> आजले हिजो बिर्सेझैँ बिर्सिने हौ कि?",
    Bhanai: "हेर, तिम्रो लागि तारा तोडी दिन्छु त भनाइ मात्र हो<br> एउटा भनाइ मात्र हो<br> हेर, तिम्रो लागि जीवन त्यागी दिन्छु<br> ति बचन त हैन, हो भावना<br> केही रहने छैन तिमी बिना<br> मरेर कहाँ जान्छु मलाई थाहा छैन<br> तारा तिमी संग जिउन फेरी पाउदिन<br> हेर, तिम्रो लागि बादल सारी दिन्छु त भनाइ मात्र हो<br> एउटा भनाइ मात्र हो<br> हेर, तिम्रो लागि समय रोकी दिन्छु<br> ति बचन त हैन, हो भावना<br> केही रहने छैन तिमी बिना<br> मरेर कहाँ जान्छु मलाई थाहा छैन<br> तर तिमी संग जिउन फेरी पाउदिन<br> तिमी नै छैनौ भने, म त एउटा भ्रम मात्र हो<br> तिमी नै छैनौ भने, म त एउटा भनाइ मात्र हो...<br> तिमी नै छैनौ भने, म त एउटा भ्रम मात्र हो<br> तिमी नै छैनौ भने, म त एउटा भनाइ मात्र हो",
    NaganyaMaya: "उसले तिम्रो हात समायो कि?<br> तिमीलाई अलिक नजिक ल्यायो कि?<br> अनि उसका सबै पीरहरू तिम्रो काँधमा बिसायो कि?<br> या अँधेरी आउँदा तिमीलाई अँगालेर निदायो कि?<br> बिहान आँखा खोलेर तिमीलाई नै फेरि पायो कि?<br> उसका आँखाकै अगाडि<br> ओठ नै भिझाउन मिल्ने<br> कम्बलमुनि बतासिएका<br> ढुकढुकी सुनाउनै मिल्ने गरी<br> भोलि आकाश गडगडाए उसैलाई खोज्छौ हाेला<br> उसकै समुद्रतिर बगी जान्छन् तिम्रा खोला<br> कल्पनाले भ्याउने जम्मै तिम्रा दिनहरू सबै<br> उसकै अनुहारले भरी निदाउने गर्छौ होला<br> उसका ओठकै अगाडि<br> निधारै सजाउन मिल्ने<br> सिरानीमा सँगेलिएका<br> सपना देखाउनै मिल्ने गरी<br> पर नै बसेर म माया गरुँला<br> यही मायाकै खातिर दिनदिनै मरुँला<br> नगण्य माया यो, तिमीले बिर्सिए<br> कल्पनाहरू नै साँचेरै बाँचुँला<br> Hm, म, whoa-oh<br> Whoa, म, whoa<br> उसले तिम्रो हात समायो कि?<br> तिमीलाई अलिक नजिक ल्यायो कि?<br> अनि उसका सबै पीरहरू तिम्रो काँधमा बिसायो कि?",
    AparachitBhawana: "आकाशैमा एउटा तारा टुट्यो<br> मनको कामना मागी दिउँ कि?<br> तर डर लाग्छ पुराना यादहरू<br> झरी झै दोहोरिने पो हो कि?<br> अपरिचित तिम्रो मेरो भावनाहरू एक आपसमा<br> बुझि देऊ न मायाका कुरा आँखाले म व्यक्त गर्दैछु<br> तिमीलाई मैले, मायालु<br> तिमीलाई लुकेका भावना बुझि देऊ<br> तिमी र मेरो<br> अपरिचित भावना<br> परेलीमा अल्झिएका<br> अपरिचित भावना<br> मेरो हातको रेखाहरूले<br> तिम्रो कथा कोरि बसी रहन्छ<br> अपरिपक्व मेरो मुटुको<br> चित्त बुझाउँ कसरी तिमी नै भन<br> हजारौं शंका लाग्छ किन<br> मायाहरूका कविता माथि?<br> त्यही नि बुझिदेऊ न मायाका कुरा आँखाले म व्यक्त गर्दैछु<br> तिमीलाई मैले, मायालु<br> तिमीलाई लुकेका भावना बुझि देऊ<br> तिमी र मेरो<br> अपरिचित भावना<br> परेलीमा अल्झिएका<br> अपरिचित भावना",
    Ranga: "तिम्रो आँखामा डुबिसकेछु<br> मलाई निकाल्न नखोज<br> मेरो गीतको भाका बनेछाै<br> मलाई मात्रै तिमी गाइदेऊ न<br> जीवनभरिका लागि सम्झना बनिदिनू<br> म हाँसिदिउँला सधैँ<br> तिमी हाँसोमा रङ्ग थपी आउनू है<br> बादल बनेरै आए नि हुन्छ<br> घाम बनेरै छाए पनि<br> शब्द बनेरै बसे नि हुन्छ<br> लय बनेरै गाए पनि<br> मनको कुनै कुनामा किन? पूरै मनमा बसिदिनू<br> म हाँसिदिउँला सधैँ<br> तिमी हाँसोमा रङ्ग थपी आउनू है<br> जीवनभरिका लागि सम्झना बनिदिनू<br> म हाँसिदिउँला सधैँ<br> तिमी हाँसोमा रङ्ग थपी आउनू है",
    KaiseHua: "हँसता रहता हूँ तुझसे मिलकर क्यूँ आजकल?<br> बदले-बदले हैं मेरे तेवर क्यूँ आजकल?<br> आँखें मेरी हर जगह ढूँढें तुझे बेवजह<br> ये मैं हूँ या कोई और है मेरी तरह<br> कैसे हुआ? कैसे हुआ?<br> तू इतना ज़रूरी कैसे हुआ?<br> कैसे हुआ? कैसे हुआ?<br> तू इतना ज़रूरी कैसे हुआ?<br> मैं बारिश की बोली समझता नहीं था<br> हवाओं से मैं यूँ उलझता नहीं था<br> है सीने में दिल भी, कहाँ थी मुझे ये ख़बर<br> कहीं पे हो रातें, कहीं पे सवेरे<br> आवारगी ही रही साथ मेरे<br> “ठहर जा, ठहर जा, ” ये कहती है तेरी नज़र<br> क्या हाल हो गया है ये मेरा?<br> आँखें मेरी हर जगह ढूँढें तुझे बेवजह<br> ये मैं हूँ या कोई और है मेरी तरह?<br> कैसे हुआ? कैसे हुआ?<br> तू इतना ज़रूरी कैसे हुआ?<br> कैसे हुआ? कैसे हुआ?<br> तू इतना ज़रूरी कैसे हुआ?<br> कैसे हुआ? कैसे हुआ?<br> तू इतना ज़रूरी कैसे हुआ?",
    Sayyan: "हीरे मोती मैं ना चाहूँ<br> मैं तो चाहूँ संगम तेरा<br> मैं तो तेरी, सैयां तू है मेरा<br> सैयां सैयां<br> तू जो, छू ले, प्यार से आराम से मर जाऊं<br> आजा, चँदा, बाहों में तुमें ही गुम हो जाऊँ मैं,<br> तेरे नाम में खो जाऊं<br> सैयां सैयां<br> सैयां सैयां<br> मेरा दिल खुशी से झूमें, गायें रातें<br> पल-पल मुझे डुबाए जाते-जाते<br> तुझे जीत-जीत हारूं ये प्राण-प्राण वारूँ<br> हाय ऐसे मैं निहारू तेरी आरती उतारूँ<br> तेरे नाम से जुड़े है सारे नाते<br> सैयां सैयां<br> ये नरम-नरम नशा है, बढ़ता जाए<br> कोई प्यार से घुंघटिया, देता उठाये<br> अब बावरा हुआ मन<br> जग हो गया है रोशन<br> ये नयी-नयी सुहागन<br> हो गयी है तेरी जोगन<br> कोई प्रेम की पुजारन मन्दिर सजाये<br> सैयां सैयां",
    DayLight: "Telling myself I won't go there<br> Oh, but I know that I won't care<br> Tryna wash away all the blood I've spilt<br> This lust is a burden that we both share<br> Two sinners can't atone from a lone prayer<br> Souls tied, intertwined by our pride and guilt<br> There's darkness in the distance<br> From the way that I've been livin'<br> But I know I can't resist it<br> Oh, I love it and I hate it at the same time<br> You and I drink the poison from the same vine<br> Oh, I love it and I hate it at the same time<br> Hidin' all of our sins from the daylight<br> From the daylight, runnin' from the daylight<br> From the daylight, runnin' from the daylight<br> Oh, I love it and I hate it at the same time<br> Tellin' myself it's the last time<br> Can you spare any mercy that you might find<br> If I'm down on my knees again?<br> Deep down, way down, Lord, I try<br> Try to follow your light, but it's night time<br> Please, don't leave me in the end<br> There's darkness in the distance<br> I'm beggin' for forgiveness (ooh)<br> But I know I might resist it, oh<br> Oh, I love it and I hate it at the same time<br> You and I drink the poison from the same vine<br> Oh, I love it and I hate it at the same time<br> Hidin' all of our sins from the daylight<br> From the daylight, runnin' from the daylight<br> From the daylight, runnin' from the daylight<br> Oh, I love it and I hate it at the same time<br> Oh, I love it and I hate it at the same time<br> You and I drink the poison from the same vine<br> Oh, I love it and I hate it at the same time<br> Hidin' all of our sins from the daylight<br> From the daylight, runnin' from the daylight<br> From the daylight, runnin' from the daylight<br> Oh, I love it and I hate it at the same time",
    DeathBed: "Don't stay awake for too long, don't go to bed<br> I'll make a cup of coffee for your head<br> It'll get you up and going out of bed<br> Yeah, I don't wanna fall asleep, I don't wanna pass away<br> I been thinking of our future, 'cause I'll never see those days<br> I don't know why this has happened, but I probably deserve it<br> I tried to do my best, but you know that I'm not perfect<br> I been praying for forgiveness, you've been praying for my health<br> When I leave this Earth, hoping you'll find someone else<br> 'Cause, yeah, we still young, there's so much we haven't done<br> Getting married, start a family, watch your husband with his son<br> I wish it could be me, but I won't make it out this bed<br> I hope I go to Heaven, so I see you once again<br> My life was kinda short, but I got so many blessings<br> Happy you were mine, it sucks that it's all ending<br> Don't stay awake for too long, don't go to bed<br> I'll make a cup of coffee for your head<br> It'll get you up and going out of bed (yeah, ayy, ayy)<br> Don't stay awake for too long, don't go to bed<br> I'll make a cup of coffee for your head<br> It'll get you up and going out of bed (ayy, yeah)<br> I'm happy that you here with me, I'm sorry if I tear up<br> When me and you were younger, you would always make me cheer up<br> Taking goofy videos and walking through the park<br> You would jump into my arms every time you heard a bark<br> Cuddle in your sheets, sing me sound asleep<br> And sneak out through your kitchen at exactly 1:03<br> Sundays, went to church, on Mondays, watched a movie<br> Soon you'll be alone, sorry that you have to lose me<br> Don't stay awake for too long, don't go to bed<br> I'll make a cup of coffee for your head<br> It'll get you up and going out of bed<br> Don't stay awake for too long, don't go to bed<br> I'll make a cup of coffee for your head<br> It'll get you up and going out of bed<br> Don't stay awake for too long, don't go to bed<br> I'll make a cup of coffee for your head<br> It'll get you up and going out of bed<br> Don't stay awake for too long, don't go to bed<br> I'll make a cup of coffee for your head<br> It'll get you up and going out of bed<br> Don't stay awake for too long, don't go to bed<br> I'll make a cup of coffee for your head<br> It'll get you up and going out of bed",
    TakeMeToChurch: "My lover's got humor<br> She's the giggle at a funeral<br> Knows everybody's disapproval<br> I should've worshiped her sooner<br> If the Heavens ever did speak<br> She's the last true mouthpiece<br> Every Sunday's getting more bleak<br> A fresh poison each week<br> \"We were born sick\", you heard them say it<br> My church offers no absolutes<br> She tells me, \"Worship in the bedroom\"<br> The only Heaven I'll be sent to<br> Is when I'm alone with you<br> I was born sick, but I love it<br> Command me to be well<br> A-, Amen, Amen, Amen<br> Take me to church<br> I'll worship like a dog at the shrine of your lies<br> I'll tell you my sins and you can sharpen your knife<br> Offer me that deathless death<br> Good God, let me give you my life<br> Take me to church<br> I'll worship like a dog at the shrine of your lies<br> I'll tell you my sins and you can sharpen your knife<br> Offer me that deathless death<br> Good God, let me give you my life<br> If I'm a pagan of the good times<br> My lover's the sunlight<br> To keep the Goddess on my side<br> She demands a sacrifice<br> Drain the whole sea<br> Get something shiny<br> Something meaty for the main course<br> That's a fine looking high horse<br> What you got in the stable?<br> We've a lot of starving faithful<br> That looks tasty<br> That looks plenty<br> This is hungry work<br> Take me to church<br> I'll worship like a dog at the shrine of your lies<br> I'll tell you my sins so you can sharpen your knife<br> Offer me my deathless death<br> Good God, let me give you my life<br> Take me to church<br> I'll worship like a dog at the shrine of your lies<br> I'll tell you my sins so you can sharpen your knife<br> Offer me my deathless death<br> Good God, let me give you my life<br> No masters or kings when the ritual begins<br> There is no sweeter innocence than our gentle sin<br> In the madness and soil of that sad earthly scene<br> Only then I am human<br> Only then I am clean<br> Oh, oh, Amen, Amen, Amen<br> Take me to church<br> I'll worship like a dog at the shrine of your lies<br> I'll tell you my sins and you can sharpen your knife<br> Offer me that deathless death<br> Good God, let me give you my life<br> Take me to church<br> I'll worship like a dog at the shrine of your lies<br> I'll tell you my sins and you can sharpen your knife<br> Offer me that deathless death<br> Good God, let me give you my life",
    Lonely: "Lonely, I'm Mr. Lonely<br> I have nobody for my own<br> I'm so lonely, I'm Mr. Lonely<br> I have nobody for my own<br> I am so lonely<br> Yo, this one here goes out to all my players out there, man<br> Ya know, that got that one good girl, Lord<br> That's always been there, man<br> Like, took all the bullshit<br> But then one day, she can't take it no more and decide to leave<br> Yeah, I woke up in the middle of the night<br> And I noticed my girl wasn't by my side<br> Coulda sworn I was dreamin' for her<br> I was feenin' so I had to take a little ride<br> Backtracking over these few years<br> Tryin' ta figure out what I do to make it go bad<br> 'Cause ever since my girl left me<br> My whole life came crashing and I'm so<br> Lonely (so lonely)<br> I'm Mr. Lonely (Mr. Lonely)<br> I have nobody (I have nobody)<br> For my own (to call my own girl)<br> I'm so lonely (so lonely)<br> I'm Mr. Lonely (Mr. Lonely)<br> I have nobody (I have nobody)<br> For my own (to call my own girl)<br> I am so lonely<br> Can't believe I had a girl like you<br> And I just let you walk right outta my life<br> After all I put you through<br> You still stuck around and stayed by my side<br> What really hurt me is I broke your heart<br> Baby, you're a good girl and I had no right<br> I really wanna make things right<br> 'Cause without you in my life girl, I'm so<br> Lonely (so lonely)<br> I'm Mr. Lonely (Mr. Lonely)<br> I have nobody (I have nobody)<br> For my own (to call my own girl)<br> I'm so lonely (so lonely)<br> I'm Mr. Lonely (Mr. Lonely)<br> I have nobody (I have nobody)<br> For my own (to call my own girl)<br> I am so lonely<br> Been all about the world, ain't never met a girl<br> That can take the things that you been through<br> Never thought the day would come where you'd get up and run<br> And I would be out chasing you<br> 'Cause ain't nowhere in the globe I'd rather be<br> Ain't no one in the globe I'd rather see<br> Than the girl of my dreams that made me be<br> So happy but now so lonely<br> Lonely (so lonely)<br> I'm Mr. Lonely (Mr. Lonely)<br> I have nobody (I have nobody)<br> For my own (to call my own girl)<br> I'm so lonely (so lonely)<br> I'm Mr. Lonely (Mr. Lonely)<br> I have nobody (I have nobody)<br> For my own (to call my own girl)<br> I am so lonely<br> Never thought that I'd be alone<br> I didn't think you'd be gone this long<br> I just want you to call my phone<br> So stop playing girl and come on home<br> Baby girl, I didn't mean to shout<br> I want me and you to work it out<br> I never wished to ever hurt my baby<br> And it's drivin' me crazy 'cause I'm so<br> Lonely (so lonely)<br> I'm Mr. Lonely (Mr. Lonely)<br> I have nobody (I have nobody)<br> For my own (to call my own girl)<br> I'm so lonely (so lonely)<br> I'm Mr. Lonely (Mr. Lonely)<br> I have nobody (I have nobody)<br> For my own (to call my own girl)<br> I am so lonely<br> So lonely (lonely)<br> So lonely (so lonely)<br> Mr. Lonely (lonely)<br> So lonely (so lonely)<br> So lonely (lonely)<br> So lonely (so lonely)<br> So lonely<br> Mr. Lonely",
    Arcade: "A broken heart is all that's left<br> I'm still fixing all the cracks<br> Lost a couple of pieces when<br> I carried it, carried it, carried it home<br> I'm afraid of all I am<br> My mind feels like a foreign land<br> Silence ringing inside my head<br> Please carry me, carry me, carry me home<br> I've spent all of the love I saved<br> We were always a losing game<br> Small town boy in a big arcade<br> I got addicted to a losing game<br> Oh Oh All I know, all I know<br> Loving you is a losing game<br> Do you love me, love me not?<br> Giving pieces from my heart<br> Tomorrow's coming and has gone<br> Still I carried, I carried, I carried on<br> Oh Oh All I know, all I know<br> Loving you is a losing game<br> Oh Oh All I know, all I know<br> Loving you is a losing game<br> I don't need your games, game over<br> Get me off this rollercoaster<br> Oh Oh All I know, all I know<br> Loving you is a losing game<br> Oh Oh All I know, all I know<br> Loving you is a losing game",
    FairyTale: "Years ago when I was younger<br> I kinda' liked a girl I knew.<br> She was mine, and we were sweethearts,<br> That was then, but then its true<br> I'm in love with a fairytale<br> Even though it hurts.<br> Cause I don't care if I lose my mind;<br> I'm already cursed<br> Every day we started fighting<br> Every night we fell in love.<br> No one else could make me sader,<br> But no one else could lift me high above<br> I don't know what I was doing<br> When suddenly we fell apart.<br> Nowadays I cannot find her.<br> But when I do we'll get a brand new start.<br> I'm in love with a fairytale<br> Even though it hurts.<br> Cause I don't care if I lose my mind;<br> I'm already cursed<br> Shes a fairytale, yeah<br> Even though it hurts<br> Cause I don't care if I lose my mind;<br> I'm already cursed",
    FightBack: "You're never gonna make it, you're not good enough<br> There's a million other people with the same stuff<br> You really think you're different? Man you must be kidding<br> Think you're gonna hit it, but you just don't get it<br> It's impossible, it's not probable<br> You're irresponsible, too many obstacles<br> You gotta stop it yo, you gotta take it slow<br> You can't be a pro, don't waste your time no more<br> Who the fuck are you to tell me what to do?<br> I don't give a damn if you say you disapprove<br> I'm gonna make my move, I'm gonna make it soon<br> And I'll do it 'cause it's what I want to fucking do<br> 'Cause all these opinions and all these positions<br> They coming in millions, they're blocking your vision<br> But no, you can't listen, that shit is all fiction<br> 'Cause you hold the power as long as you're driven<br> You're never gonna make it<br> There's no way that you make it<br> Yeah maybe you can fake it<br> But you're never gonna make it<br> Are you just gonna take that?<br> Make them take it all back<br> Don't tell me you believe that<br> Are you just gonna take that?<br> Or will you fucking fight back?<br> Or will you fucking fight back?<br> Yeah<br> You ain't gonna make it, you ain't never ever gonna break it<br> You can never beat 'em man, they're better than you, face it<br> Thinking that they give a damn, you're not thinking straight kid<br> No, they don't give a damn, you got what I'm saying?<br> I'm not fucking playing, I'll give it to you straight, man<br> There's too many others and you're not that great, man<br> Stop what you're saying, stop what you're making<br> Everybody here knows that you're just faking<br> Nah, I don't wanna hear it anymore<br> I don't wanna hear it anymore<br> All these fucking thoughts, they are not what I need anymore<br> I'm about to shut the motherfucking door<br> On all you poor ass haters with your heads in the clouds<br> Talking out loud so proud<br> You better shut your goddamn mouths<br> Before I do more than speak out, it's about to head south<br> You're never gonna make it<br> There's no way that you make it<br> Yeah maybe you can fake it<br> But you're never gonna make it<br> Are you just gonna take that?<br> Make them take it all back<br> Don't tell me you believe that<br> Are you just gonna take that?<br> Or will you fucking fight back?<br> Or will you fucking fight back?",
    NeverGiveUp: "My hands steady<br> I feel ready<br> But my legs heavy<br> I don't get it<br> How come I haven't hit it<br> Already<br> Still working<br> I'm still learning<br> I'm still searching<br> Finally earning something<br> Finally turning something<br> Called a profit<br> If I hear you talkin' shit<br> Don't get caught in it<br> I'll be poppin' off and hit<br> Ya ass dropping all your shit<br> Yeah I promise this<br> I got promises<br> You ain't stopping this<br> Cross my shit<br> You'll be knocked unconscious bitch<br> That's the consequence<br> I got this<br> I will not quit<br> Man I'm on it<br> Honest<br> I'm gon' launch quick<br> Then I'm gone it's<br> Just a matter of time<br> Before I'm over the climb<br> And moving onto my prime<br> Just quit my 9 to 5<br> I'm rocking<br> And they watching<br> Cuz it's shocking<br> Dropping<br> All these top ten<br> Songs no stopping<br> It's time to live my life<br> It's time to live not die<br> Wish I could slow down time<br> And just enjoy the climb<br> Yeah I'm the one to get it bruh<br> I swear to god I'll get it bruh<br> And I ain't never giving up<br> Yeah I never give up<br> I got this<br> Man I got it<br> I will not quit<br> I am on it<br> Never off it<br> Got the block lit<br> I am toxic<br> Spitting logic<br> Make 'em nauseous<br> Honest<br> Cannot stop this<br> Never cautious<br> Drop it<br> I'm the hottest<br> Knock knock bitch<br> Watch it<br> I'm the fucking king of rock bitch<br> Prophet<br> Spittin' hot shit<br> Off topic<br> Chronic<br> I think I've mother fucking lost it<br> Take it back<br> Matter fact<br> Making racks<br> Where it's at<br> Had my back<br> To the mat<br> Not an act<br> That's a fact<br> We attack<br> In a pack<br> Don't react<br> No we act<br> Think I'm blacked<br> Off this jack<br> While I rap<br> Bout to snap<br> Throw a jab<br> Give a crap<br> Where it lands<br> I'm the man<br> Got a plan<br> Better than<br> Most brands<br> God damn<br> Ima rhyme<br> Till I die<br> Never lie<br> That's a lie<br> I don't try<br> I defy<br> Can't deny<br> That I'm right<br> Yeah!<br> Yeah<br> I've been in and out the studio<br> Like a student though<br> Working on a movement yeah I'll do it<br> 'Cause I'm in the zone<br> And you know<br> That I'm ready for the shows<br> How it goes<br> I don't know<br> But I'm waiting till I'm chose<br> Front row<br> Here I go<br> All these people want to know<br> What you think of them lately<br> Do you really love me or do you really hate me<br> On a scale of one to ten what would you grade me<br> All this social media has got me going crazy<br> Lately<br> Everything's inflated<br> Mainly<br> Everyone's invaded<br> Privacy is naked<br> Man I really hate it<br> God I really hate it<br> I just wanna make it<br> Through all this fake shit<br> Livin' in the real life<br> Livin' for some real times<br> Talk about the real climb<br> Passionate and real rhymes<br> Steal time<br> Back from my 9 to 5<br> Takin back my fuckin' life<br> I just wanna feel alive<br> Yeah I'm the one to get it bruh<br> I swear to god I'll get it bruh<br> And I ain't never giving up<br> Yeah I never give up<br> Fake it till I make it<br> Mother fuckin' take it<br> Take it back from these haters<br> Playin' tracks for the traitors<br> Got the passion<br> And that's when<br> It happens<br> Factions<br> Take action<br> Drafting<br> Their captains<br> It's happening<br> I'm raising my status<br> Facing the madness<br> I'm out gaining traction<br> Avoiding distractions<br> I'm snapping<br> No captions<br> Attracting<br> Reactions<br> Adapting<br> Attacking<br> Commanding<br> The masses<br> Practicing habits<br> I don't fuckin' ask bitch<br> I just fuckin' grab it<br> I am never static<br> Massively<br> Active<br> Expanding<br> That's lit<br> Planning<br> To have it<br> So I will go capture it<br> And Ima stay after it<br> I'm gon fuckin' master it<br> Put em on blast kid<br> They will never last kid!<br> Don't be so dramatic<br> Not my demographic<br> This shit is democratic<br> They vote NEFFEX yeah bitch!",
    Grateful: "Always do it on my own.<br> So I gotta get through it.<br> And the only thing I know.<br> Is to love what I'm doing.<br> Never give up, never slow.<br> Till I finally prove it.<br> Never listen to the no's.<br> I just wanna keep moving.<br> Keep my head up when I act.<br> Head up, that's a fact.<br> Never looking back.<br> I'ma keep myself on track.<br> Keep my head up, staying strong.<br> Always moving on.<br> Feel I don't belong.<br> Tell my thoughts to move along.<br> Push myself to be the best.<br> Die with no regrets.<br> Live with every breath.<br> See my message start to spread.<br> And I have so many dreams.<br> Then you hit your teens.<br> Life ain't really what it seems.<br> Try to find out what it means.<br> Always do it on my own.<br> So I gotta get through it.<br> And the only thing I know.<br> Is to love what I'm doing.<br> Never give up, never slow.<br> Till I finally prove it.<br> Never listen to the no's.<br> I just wanna keep moving.<br> Yeah, I put out all this art.<br> It's my only medicine, yeah.<br> Everything I do.<br> I'm just being genuine, yeah.<br> I'm sick of being screwed.<br> Feel my own adrenaline, yeah.<br> I do just what I do.<br> And I hope you let me in, let me in, yeah.<br> I'm grateful, oh yeah.<br> Able, oh yeah.<br> I'm stable, oh yeah.<br> No label, oh yeah.<br> You know me, I have.<br> Only a path.<br> I'm lonely, but damn.<br> I'm going to win, yeah.<br> I don't want no fake love.<br> I want the real stuff.<br> Everybody listen up.<br> 'Cause I'll only say it once.<br> I'm gon' show you all the path.<br> If you want it bad.<br> I'm gon' show you where it's at, yeah.<br> How you can get it back, yeah.<br> 'Cause I ain't never done.<br> I'll be number one.<br> Working hella hard.<br> Until I get just what I want, yeah.<br> Rise just like the sun, yeah.<br> Fatal like a gun.<br> Shooters gonna shoot.<br> And I'm gon' shoot until I've won, yeah.<br> Always do it on my own.<br> So I gotta get through it.<br> And the only thing I know.<br> Is to love what I'm doing.<br> Never give up, never slow.<br> Till I finally prove it.<br> Never listen to the no's.<br> I just wanna keep moving.<br> Yeah, I put out all this art.<br> It's my only medicine, yeah.<br> Everything I do.<br> I'm just being genuine, yeah.<br> I'm sick of being screwed.<br> Feel my own adrenaline, yeah.<br> I do just what I do.<br> And I hope you let me in, let me in, yeah.<br> I'm grateful, oh yeah.<br> Able, oh yeah.<br> I'm stable, oh yeah.<br> No label, oh yeah.<br> You know me, I have.<br> Only a path.<br> I'm lonely, but damn.<br> I'm going to win, yeah",
    Careless: "But it's too late now<br> I remember you and me<br> And how how careless we could be<br> All day<br> And all night<br> We'd stay up<br> It felt so right<br> We were so young<br> We were so dumb<br> We would get drunk<br> And then hook up<br> We were ok<br> We were alright<br> Staying awake<br> 'Til the sun rise<br> We were in love<br> Couldn't stop us<br> Like a good drug<br> Never enough<br> We'd hook up in my car<br> Drive it so far<br> Play you guitar<br> You'd show me your art<br> Let down our guards<br> Think with our hearts<br> Stare at the stars<br> We were never apart<br> Drinking to young<br> Way too much fun<br> Out in the sun<br> Or in when it's gone<br> Took you to prom<br> Dance to our song<br> Dance all night long<br> 'Til the lights come on<br> It's too late now I remember everything<br> And how careless we could be<br> But it's too late now I remember you and me<br> And how careless we could be<br> It's too late now I remember everything<br> And how careless we could be<br> And how careless we could be<br> And how careless we could be<br> And how careless we could be<br> And how careless we could be<br> Late nights<br> Long fights<br> It felt right<br> We were alive<br> We would go out<br> We were so loud<br> We were so proud<br> We had no doubts<br> Weekends<br> And weekdays<br> We'd spend<br> Our own way<br> We were careless<br> We were fearless<br> We were reckless<br> Time was precious<br> We love to waste time<br> Whiskey and wine<br> Drinking all night<br> Asleep by your side<br> Finally alive<br> We would just drive<br> Never arrive<br> Our journey was life<br> Staying out late<br> Testing our faith<br> Running away<br> We lived for today<br> Young and so bold<br> Never get old<br> Screw what we're told<br> We can't be controlled<br> But it's too late now I remember everything<br> And how careless we could be<br> But it's too late now I remember you and me<br> And how careless we could be<br> It's too late now I remember everything<br> And how careless we could be<br> And how careless we could be<br> And how careless we could be<br> And how careless we could be<br> And how careless we could be<br> And how careless we could be<br> It's too late now<br> I remember you and me<br> And how how careless we could be",
    Cold: "Yeah<br> Everybody knows that I'm breaking down<br> Everybody knows I ain't fakin' now<br> Everybody knows my heart's vacant now<br> Yeah, she hates me now, I made mistakes, but now<br> I don't ever wanna be alone, I don't really ever feel at home<br> On my own, in the zone<br> That's the only way I know, feelin' low<br> 'Bout to blow back up, here I go<br> I will never let the doubt creep in<br> Gotta pop a couple more Aspirin<br> I don't think I'll ever let you in<br> Easier to break it off as friends<br> I don't really understand myself<br> I don't really understand, need help<br> I don't wanna be left on the shelf<br> Couldn't even hear me if I yelled<br> It's so cold outside<br> I'm alone, I'm alright<br> It's so cold outside<br> I'm alone, I'm alright<br> Yeah, let's go<br> I don't wanna break down, always feel like I could break now<br> But I never let it take me to that place now<br> I won't ever let my thoughts get away now<br> I got better things to do, picking fate now<br> I just wanna be the best, call me great now<br> I don't know if I'm okay or insane now<br> I remember better days on the playground<br> Hoping I can find my way to a better place now<br> Even when I'm feeling down, I fight<br> Even when I don't know what is right<br> I'ma pick a side, and I'ma take pride<br> I will decide my fate and I<br> Will never let them tell me who I am<br> If you try to shape me, I'll be damned<br> Planted on the ground is where I stand<br> Never give up, that was always the plan<br> It's so cold outside<br> I'm alone, I'm alright<br> It's so cold outside<br> I'm alone, I'm alright",
    Destiny: "Yeah<br> I don't believe in destiny<br> I just do what's best for me<br> Don't listen to my enemies<br> They're just full of jealousy<br> Duh<br> This legacy<br> You gon' see what's left of me<br> You gon' see success in me<br> You ain't seen the rest of me<br> I just wanna be the best at what I know<br> Better than the rest, just watch me grow<br> Put me to the test and watch me go<br> This is my quest, I'ma make it known<br> They call me obsessive, oh I know<br> Call me selective with my notes<br> Call me aggressive with my flow<br> Call me offensive, even though<br> So we ain't gonna lie, life's tough<br> Tryna get by, life's rough<br> Try to do it right, It's not enough<br> Even though you try, you still mess up<br> But I'm still gonna fight for what I love<br> Still gonna die for what I love<br> Still gonna try, I won't give up<br> Still gonna fight until I've won<br> They say I'm way too obsessed<br> And I've got nothing left<br> And I'm not quite there yet<br> But those words they'll regret<br> 'Cause I've got something left<br> And I'm not giving in<br> I will not let them win<br> I won't stop 'til the end, no<br> I've been through some injuries, mentally and physically<br> Studied them religiously, so I don't repeat history<br> And people won't admit to me, they don't want a victory<br> Bad enough to get a seat, they'd rather just go leave it be<br> And oh, this journey<br> I've been on since 13, working hard and learning<br> Never stopping searching, yeah<br> It's burning, all this passion hurts me<br> I took action working, writing down these words he<br> No, I'm not okay<br> I just wanna be something<br> I don't wanna be nothing<br> Living all alone<br> No, I'm not alright<br> I'm just barely getting by<br> But I'll tell you I'm just fine<br> So you leave me alone<br> They say I'm way too obsessed<br> And I've got nothing left<br> And I'm not quite there yet<br> But those words they'll regret<br> 'Cause I've got something left<br> And I'm not giving in<br> I will not let them win<br> I won't stop 'til the end, no",
}]

let songs = [
    { songName: "Dhairya - Sajjan Raj Vaidya", filePath: "newSongs/Dhairya.mp3", coverPath: "newCovers/Dhairya.jpg", duration: "6:34", lyrics: songLyrics[0].Dhairya },
    { songName: "Birsiney Hau Ki - The Elements", filePath: "newSongs/Birsiney Hau Ki.mp3", coverPath: "newCovers/Birsiney Hau Ki.jpg", duration: "5:26", lyrics: songLyrics[0].BirsineyHauKi  },
    { songName: "Bhanai - Tribal Rain", filePath: "newSongs/Bhanai.mp3", coverPath: "newCovers/Bhanai.jpg", duration: "4:00", lyrics: songLyrics[0].Bhanai  },
    { songName: "Naganya Maya - Sajjan Raj Vaidya", filePath: "newSongs/Naganya Maya.mp3", coverPath: "newCovers/Naganya Maya.jpg", duration: "5:21", lyrics: songLyrics[0].NaganyaMaya  },
    { songName: "Aparachit Bhawana - Oasis Karki", filePath: "newSongs/Aparachit Bhawana.mp3", coverPath: "newCovers/Aparachit Bhawana.jpg", duration: "3:36", lyrics: songLyrics[0].AparachitBhawana  },
    { songName: "Ranga - RockHeads", filePath: "newSongs/Ranga.m4a", coverPath: "newCovers/Ranga.jpg", duration: "4:05", lyrics: songLyrics[0].Ranga  },
    { songName: "Kaise Hua - Vishal Mishra", filePath: "newSongs/Kaise Hua.mp3", coverPath: "newCovers/Kaise Hua.jpg", duration: "4:14", lyrics: songLyrics[0].KaiseHua  },
    { songName: "Sayyan - Kailash Kher", filePath: "newSongs/Sayyan.mp3", coverPath: "newCovers/Sayyan.jpg", duration: "5:09", lyrics: songLyrics[0].Sayyan  },
    { songName: "DayLight - David Kushner", filePath: "newSongs/DayLight.mp3", coverPath: "newCovers/Daylight.jpg", duration: "3:50", lyrics: songLyrics[0].DayLight  },
    { songName: "Death Bed - Powfu", filePath: "newSongs/Death Bed.mp3", coverPath: "newCovers/Death Bed.jpg", duration: "2:54", lyrics: songLyrics[0].DeathBed  },
    { songName: "Take Me To Church - Hozier", filePath: "newSongs/Take Me To Church.mp3", coverPath: "newCovers/Take Me To Church.jpg", duration: "4:17", lyrics: songLyrics[0].TakeMeToChurch  },
    { songName: "Lonely - Akon", filePath: "newSongs/Lonely.mp3", coverPath: "newCovers/Lonely.jpg", duration: "3:56", lyrics: songLyrics[0].Lonely  },
    { songName: "Arcade - Duncan Laurence", filePath: "newSongs/Arcade.m4a", coverPath: "newCovers/Arcade.jpg", duration: "3:03", lyrics: songLyrics[0].Arcade  },
    { songName: "FairyTale - Alexender Rybak", filePath: "newSongs/FairyTale.m4a", coverPath: "newCovers/FairyTale.jpg", duration: "3:02", lyrics: songLyrics[0].FairyTale  },
    { songName: "Careless - NEFFEX", filePath: "newSongs/Careless.m4a", coverPath: "newCovers/Careless.jpg", duration: "4:56", lyrics: songLyrics[0].Careless  },
    { songName: "Cold - NEFFEX", filePath: "newSongs/Cold.m4a", coverPath: "newCovers/Cold.jpg", duration: "3:06", lyrics: songLyrics[0].Cold  },
    { songName: "Destiny - NEFFEX", filePath: "newSongs/Destiny.m4a", coverPath: "newCovers/Destiny.jpg", duration: "3:26", lyrics: songLyrics[0].Destiny  },
    { songName: "Fight Back - NEFFEX", filePath: "newSongs/Fight Back.m4a", coverPath: "newCovers/Fight Back.jpg", duration: "3:16", lyrics: songLyrics[0].FightBack  },
    { songName: "Grateful - NEFFEX", filePath: "newSongs/Grateful.m4a", coverPath: "newCovers/Grateful.jpg", duration: "3:02", lyrics: songLyrics[0].Grateful  },
    { songName: "Never Give Up - NEFFEX", filePath: "newSongs/Never Give Up.m4a", coverPath: "newCovers/Never Give Up.jpg", duration: "4:11", lyrics: songLyrics[0].NeverGiveUp  },
]

// lyricsIcon.innerHTML = icons[0].lyricsOff;
// playPause.innerHTML = icons[0].play;
// nextButton.innerHTML = icons[0].next;
// backButton.innerHTML = icons[0].previous;

//visualize correct song ame and cover
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerText = songs[i].songName;
    element.getElementsByClassName("duration")[0].innerHTML = songs[i].duration;
});

//make all play button to be stopped
const makeAllPause = () => {

    songItemPlayButton.forEach(element => {

        element.getElementsByTagName("i")[0].classList.add('fa-circle-play');
        element.getElementsByTagName("i")[0].classList.remove('fa-circle-pause');

    });

}

//Play Function
const Play = (songIndexParam, targetIcon) => {
    GIF.style.opacity = 1;
    equalizer.style.opacity = 1;
    songIndex = songIndexParam;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();

    playPause.classList.remove('fa-circle-play');
    playPause.classList.add('fa-circle-pause');

    targetIcon.classList.remove('fa-circle-play');
    targetIcon.classList.add('fa-circle-pause');

}

//Pause Function
const Pause = (isPaused, targetIcon) => {
    //if already paused - play it
    if (isPaused) {
        GIF.style.opacity = 1;
        equalizer.style.opacity = 1;
        audioElement.play();

        playPause.classList.remove('fa-circle-play');
        playPause.classList.add('fa-circle-pause');

        targetIcon.classList.remove('fa-circle-play');
        targetIcon.classList.add('fa-circle-pause');

    }
    //if playing - pause it
    else {
        GIF.style.opacity = 0;
        equalizer.style.opacity = 0;
        audioElement.pause();

        playPause.classList.add('fa-circle-play');
        playPause.classList.remove('fa-circle-pause');

        targetIcon.classList.add('fa-circle-play');
        targetIcon.classList.remove('fa-circle-pause');
    }

}

//function of all small play button
songItemPlayButton.forEach((element,i) =>{
    element.addEventListener('click', (e)=>{
        makeAllPause();
        if (songIndex == i) {
            Pause(audioElement.paused, element.getElementsByTagName("i")[0]);
            console.log("pause " + songIndex);
        }
        else {

            Play(i, element.getElementsByTagName("i")[0]);
            console.log("play " + songIndex);
        }
    })
})


// songItemPlayButton.forEach((element, i) => {
//     element.getElementsByTagName("i")[0].addEventListener('click', (e) => {
//         makeAllPause();
//         if (songIndex == i) {
//             Pause(audioElement.paused, e.target);
//             console.log("pause " + songIndex);
//         }
//         else {

//             Play(i, e.target);
//             console.log("play " + songIndex);
//         }
//     })
// });

//Function of big play button
playPause.addEventListener('click', () => {
    Pause(audioElement.paused, songItemPlayButton[songIndex].getElementsByTagName("i")[0]);
})

//Function of nextButton
nextButton.addEventListener('click', () => {
    songIndex++;
    if (songIndex >= songs.length)
        songIndex = 0;
    makeAllPause();
    Play(songIndex, songItemPlayButton[songIndex].getElementsByTagName("i")[0]);
})

//function of backbutton
backButton.addEventListener('click', () => {
    songIndex--;
    if (songIndex < 0)
        songIndex = songs.length - 1;
    makeAllPause();
    Play(songIndex, songItemPlayButton[songIndex].getElementsByTagName("i")[0]);
})

//update progressbas, update time info
audioElement.addEventListener('timeupdate', () => {
    currentTime = Math.floor(audioElement.currentTime / 60) + ":" + Math.floor(audioElement.currentTime % 60).toString().padStart(2, "0");
    duration = Math.floor(audioElement.duration / 60) + ":" + Math.floor(audioElement.duration % 60).toString().padStart(2, "0");
    document.getElementById("songTimeInfo").innerText = currentTime + " / " + duration;
    progress = audioElement.currentTime / audioElement.duration * 1000;
    myProgressBar.value = progress;
})

//update song time of progress bar value is changed
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 1000;
})

//update song name info
audioElement.addEventListener('play', () => {
    document.getElementById("songNameInfo").innerText = songs[songIndex].songName;
    lyrics.innerHTML = songs[songIndex].lyrics;
})

//play next song if one finishes
audioElement.addEventListener('ended', () => {
    songIndex++;
    if (songIndex >= songs.length)
        songIndex = 0;
    makeAllPause();
    Play(songIndex, songItemPlayButton[songIndex].getElementsByTagName("i")[0]);
})

lyricsIcon.addEventListener('click', () => {
    if(lyrics.style.display != "none")
    {
        lyricsIcon.classList.remove("fa-regular");
        lyricsIcon.classList.add("fa-solid");
        // lyricsIcon.innerHTML = icons[0].lyricsOff;
        lyrics.style.display = "none";
    }else{
        lyricsIcon.classList.remove("fa-solid");
        lyricsIcon.classList.add("fa-regular");
        // lyricsIcon.innerHTML = icons[0].lyricsOn;
        lyrics.style.display = "block";

    }
})












/*document.getElementById("songNameInfo").innerText = songs[songIndex].songName;

//visualize correct song ame and cover
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerText = songs[i].songName;
    element.getElementsByClassName("duration")[0].innerHTML = songs[i].duration;
});

//Next Button Function
nextButton.addEventListener('click', () => {
    songIndex++;
    if (songIndex > songs.length - 1)
        songIndex = 0;
    makeAllPause();
    audioElement.currentTime = 0;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();

    songItemPlayButton[songIndex].getElementsByTagName("i")[0].classList.remove('fa-circle-play');
    songItemPlayButton[songIndex].getElementsByTagName("i")[0].classList.add('fa-circle-pause');

    document.getElementById("songNameInfo").innerText = songs[songIndex].songName;
})

//Back Button Function
backButton.addEventListener('click', () => {
    songIndex--;
    if (songIndex < 0)
        songIndex = songs.length - 1;
    makeAllPause();
    audioElement.currentTime = 0;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();

    songItemPlayButton[songIndex].getElementsByTagName("i")[0].classList.remove('fa-circle-play');
    songItemPlayButton[songIndex].getElementsByTagName("i")[0].classList.add('fa-circle-pause');

    document.getElementById("songNameInfo").innerText = songs[songIndex].songName;
})


//Control Function of big play pause button
playPause.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {

        audioElement.play();
        GIF.style.opacity = 1;

        playPause.classList.remove('fa-circle-play');
        playPause.classList.add('fa-circle-pause');

        songItemPlayButton[songIndex].getElementsByTagName("i")[0].classList.remove('fa-circle-play');
        songItemPlayButton[songIndex].getElementsByTagName("i")[0].classList.add('fa-circle-pause');

    } else {

        audioElement.pause();
        GIF.style.opacity = 0;

        playPause.classList.add('fa-circle-play');
        playPause.classList.remove('fa-circle-pause');

        songItemPlayButton[songIndex].getElementsByTagName("i")[0].classList.add('fa-circle-play');
        songItemPlayButton[songIndex].getElementsByTagName("i")[0].classList.remove('fa-circle-pause');

    }
})


//update song progress bar
audioElement.addEventListener('timeupdate', () => {
    console.log(audioElement.currentTime);
    let curtime = Math.floor(audioElement.currentTime / 60) + ":" + Math.floor(audioElement.currentTime % 60).toString().padStart(2, "0");
    document.getElementById("songTimeInfo").innerText = curtime + " / " + songs[songIndex].duration;

    //if a song finished playing
    if (audioElement.currentTime >= audioElement.duration - 0.01) {

        songIndex++;

        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();

        makeAllPause();
        document.getElementById("songNameInfo").innerText = songs[songIndex].songName;

        songItemPlayButton[songIndex].getElementsByTagName("i")[0].classList.remove('fa-circle-play');
        songItemPlayButton[songIndex].getElementsByTagName("i")[0].classList.add('fa-circle-pause');

    }

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 1000);
    myProgressBar.value = progress;

})


//change song time while changing progress bar
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 1000;

})


//function to make all play button of each songs to be paused
const makeAllPause = () => {

    songItemPlayButton.forEach(element => {

        element.getElementsByTagName("i")[0].classList.add('fa-circle-play');
        element.getElementsByTagName("i")[0].classList.remove('fa-circle-pause');

    });

}

//Function of small play pause buttons
//loop through all timeStamps
songItemPlayButton.forEach((element, i) => {


    //listen to the event if any buttons are clicked
    element.getElementsByTagName("i")[0].addEventListener('click', (e) => {

        //if song is playing and same button is pressed
        if (songIndex == i && !audioElement.paused) {

            GIF.style.opacity = 0;
            audioElement.pause();
            makeAllPause();

            playPause.classList.add('fa-circle-play');
            playPause.classList.remove('fa-circle-pause');
        }

        //if song is paused and same button is pressed
        else if (songIndex == i && audioElement.paused) {

            GIF.style.opacity = 1;
            audioElement.play();

            playPause.classList.remove('fa-circle-play');
            playPause.classList.add('fa-circle-pause');

            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
        }

        //if another button is pressed
        else {

            GIF.style.opacity = 1;
            songIndex = i;
            makeAllPause();

            audioElement.src = songs[i].filePath;
            audioElement.currentTime = 0;
            audioElement.play();

            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');

            playPause.classList.remove('fa-circle-play');
            playPause.classList.add('fa-circle-pause');
        }
        document.getElementById("songNameInfo").innerText = songs[songIndex].songName;
    })
});*/



