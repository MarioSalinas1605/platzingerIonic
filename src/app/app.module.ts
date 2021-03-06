import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { ConversationPageModule } from '../pages/conversation/conversation.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { AboutPageModule } from '../pages/about/about.module';
import { UserProvider } from '../providers/user/user';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthProvider } from '../providers/auth/auth';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';
import { ConversationProvider } from '../providers/conversation/conversation';
import { Vibration } from '@ionic-native/vibration';
import { RequestProvider } from '../providers/request/request';
import { CoverPage } from '../pages/cover/cover';
import { FriendComponent } from '../components/friend/friend';

export const firebaseConfig = {
  apiKey: "AIzaSyAx5NAJGG4LX61sMXUHcnSzzXOa-FImx5k",
  authDomain: "platzinger-dd8d4.firebaseapp.com",
  databaseURL: "https://platzinger-dd8d4.firebaseio.com",
  projectId: "platzinger-dd8d4",
  storageBucket: "platzinger-dd8d4.appspot.com",
  messagingSenderId: "1046358954738"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CoverPage,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginPageModule,
    ConversationPageModule,
    ProfilePageModule,
    AboutPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    AuthProvider,
    Geolocation,
    ConversationProvider,
    Vibration,
    RequestProvider
  ]
})
export class AppModule {}
