# Fateful Moment

*Expo (React Native) mobile app for iOS and Android, built from the Figma design.*

Figma tasarımına göre geliştirilmiş iOS ve Android mobil uygulaması. Backend yok; senaryo ve metinler dummy data ile çalışır.

## Teknoloji

- **Expo SDK 57**, React Native, TypeScript
- **Expo Router** — ekran navigasyonu
- **expo-video** — sahne videoları
- **react-native-svg** — ikonlar
- **expo-linear-gradient** — kart gradient’leri
- **Inter** (`@expo-google-fonts/inter`) — tipografi

## Kurulum

```bash
npm install
npx expo start
```

Simülatör: `npm run ios` veya `npm run android`

Videolar native modül kullandığı için fiziksel cihazda development build gerekir:

```bash
npx expo run:ios --device
npx expo run:android --device
```

Giriş ekranlarından Home’a geçmek için geçerli bir e-posta ve en az 8 karakter, bir büyük harf, bir küçük harf ve bir rakam içeren şifre yeter.

## Uygulama akışı

**Giriş (dikey):** Welcome → Sign in / Sign up → Reset password → Check email

**Oyun (yatay):** Home → Iraq War briefing → intro videosu → karar kartları → sonuç videoları. DNA profili yan menüden açılır.

Karar ekranında ilk tık seçimi onaylar (“Your Choice” + harita). Aynı karta ikinci tık sonuç videosuna gider. “Wait for Signal from Moscow” Karar 1’i, diğer seçenekler Karar 2’yi açar. Karar 1’de ekrana basınca Karar 2 gelir.

## Yaklaşım

Tasarım dosyası referans alınarak React Native’e taşındı. Giriş ekranları 375×812, oyun ekranları 812×375 tuval üzerinde konumlandırıldı; layout, renk, tipografi ve spacing değerleri Figma spesifikasyonlarına göre uygulandı.

Videolar Figma fill’lerinden export edilip `expo-video` ile oynatılıyor. Gerçek cihazda boşluk kalmaması için tam ekran arka planlar `cover` ile yayıldı; UI öğeleri tasarımdaki koordinatlarda bırakıldı. Ekran geçişleri, klavye davranışı ve dummy auth akışı mobil ortama uyarlanarak kodlandı.

## AI araçları

Geliştirme Cursor üzerinde yürütüldü. Figma MCP ile tasarım dosyası okundu; ekran yerleşimleri, asset’ler ve akış bu kaynaktan koda aktarıldı. Kod üretimi, hata ayıklama ve README bu süreçte AI destekli yapıldı.
