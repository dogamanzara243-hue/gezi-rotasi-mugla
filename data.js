const SPOT_DATA = {
    theme: "sea",
    title: "Muğla Gezi Rehberi",
    subtitle: "Bodrum, Fethiye, Marmaris ve Turkuaz Koylar",
    category: "Koylar & Tatil",
    hero: {
        badge: "Mavi Yolculuk",
        coverImage: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80&fm=webp",
        stats: [
            { label: "Ziyaretçi", value: "Yıllık 1M+" },
            { label: "İdeal Süre", value: "5-7 Gün" },
            { label: "Puan", value: "4.9 / 5" },
            { label: "Bölge", value: "Ege / Akdeniz" }
        ]
    },
    venueSummary: {
        badgeTitle: "EGE & AKDENİZ GEZİSİ",
        typeTitle: "Muğla Ziyaret Rehberi",
        description: "Ölüdeniz'den Bodrum Kalesi'ne, Saklıkent Kanyonu'ndan Göcek Koyları'na uzanan cennet tatil rotası.",
        details: [{"label": "Bölge", "value": "Ege / Akdeniz"}, {"label": "Öne Çıkan", "value": "Ölüdeniz & Bodrum"}, {"label": "İdeal Süre", "value": "5-7 Gün"}]
    },
    overview: {
        title: "Muğla Gezi Rehberi Genel Bakış",
        paragraphs: ["Muğla, Türkiye'nin en uzun sahil şeridine sahip, Bodrum, Marmaris, Fethiye ve Datça gibi dünyaca ünlü tatil beldelerini bünyesinde barındıran eşsiz bir cennettir.", "Ölüdeniz'de yamaç paraşütü yapabilir, Kelebekler Vadisi'nde doğayla baş başa kalabilir veya Bodrum'un beyaz sokaklarında gezebilirsiniz."],
        visitorNotes: [{"label": "En İyi Zaman", "value": "Mayıs - Ekim"}, {"label": "Tekne Turu", "value": "Göcek & Fethiye Koyları Mutlaka Yapılmalı"}, {"label": "Aktivite", "value": "Babadağ Paragliding"}]
    },
    
    whyVisit: {
        title: "Mugla Keşif Rotaları",
        subtitle: "Şehrin en gözde mekanlarını tematik kategorilere göre keşfedin",
        cards: [
            {
                icon: "fa-solid fa-landmark",
                title: "Tarihi Yerler",
                description: "Yüzyıllık anıtlar, kaleler, müzeler ve köklü medeniyet izleri.",
                linkText: "Tarihi Keşfet",
                url: "#must-see-items"
            },
            {
                icon: "fa-solid fa-city",
                title: "Modern Yerler",
                description: "Şehrin en popüler meydanları, alışveriş merkezleri ve plazas.",
                linkText: "Moderni İncele",
                url: "#must-see-items"
            },
            {
                icon: "fa-solid fa-gem",
                title: "Sofistike Yerler",
                description: "Seçkin kafeler, sanat galerileri ve nezih buluşma noktaları.",
                linkText: "Sofistike Noktalar",
                url: "#where-to-stay-title"
            },
            {
                icon: "fa-solid fa-tree",
                title: "Doğal Güzellikler",
                description: "Parklar, sahil şeritleri, kanyonlar ve nefis manzara noktaları.",
                linkText: "Doğayı Gör",
                url: "#transport-title"
            }
        ]
    },
     {"icon": "fa-solid fa-castle", "title": "Bodrum Kalesi", "description": "Sualtı Arkeoloji Müzesi'ne ev sahipliği yapan tarihi kale."}, {"icon": "fa-solid fa-mountain", "title": "Saklıkent Kanyonu", "description": "Buz gibi suları ve kanyon yürüyüşüyle doğa macerası."}]},
    mustSee: {
        title: "Görülmesi Gereken Öne Çıkan Noktalar",
        items: [{"category": "Plaj", "title": "Ölüdeniz & Belcekız", "description": "Dünyaca ünlü turkuaz lagün."}, {"category": "Doğa", "title": "Kelebekler Vadisi", "description": "Dik kayalıklar arasında saklı cennet vadi."}, {"category": "Tarih", "title": "Bodrum Kalesi", "description": "Eşsiz Bodrum liman manzarası."}, {"category": "Kanyon", "title": "Saklıkent", "description": "Devasa kayalıklar arasında kanyon yürüyüşü."}]
    },
    transportation: {"title": "Muğla'ya Ulaşım Seçenekleri", "tip": "Muğla'da iki adet havalimanı bulunmaktadır: Milas-Bodrum ve Dalaman.", "mapUrl": "https://maps.google.com/?q=Mugla+Turkey", "methods": [{"icon": "fa-solid fa-plane", "title": "Dalaman & Bodrum Havalimanı", "detail": "Muttaş ve Havaş otobüsleri beldelere ulaşım sağlar."}, {"icon": "fa-solid fa-ship", "title": "Feribot Seferleri", "detail": "Bodrum - Datça ve Yunan adalarına feribot turları."}]},
    whereToStay: {
        title: "Konaklama Önerileri",
        hotels: [{"badge": "Lüks Resort", "name": "The Marmara Bodrum", "distance": "Bodrum Merkez Tepesi", "link": "https://www.google.com/travel/hotels"}, {"badge": "Doğa Butik", "name": "Liberty Fabay Fethiye", "distance": "Fethiye Çalış Plajı", "link": "https://www.google.com/travel/hotels"}]
    },
    whereToEat: {
        title: "Nerede Ne Yenir?",
        restaurants: [{"badge": "Deniz Ürünleri", "name": "Memedof Bodrum", "detail": "Taze Ege Mezeleri ve Balık", "rating": "4.9"}, {"badge": "Yöresel", "name": "Muğla Köftecisi", "detail": "Geleneksel Muğla Azmak Köftesi", "rating": "4.7"}]
    }
};