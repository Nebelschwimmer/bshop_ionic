<template>
	<ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title>BookShop</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Bshop</ion-title>
				</ion-toolbar>
			</ion-header>

			<div id="container">
				<ion-grid>
					<ion-row>
						<ion-col v-for="(book, i) in bookList" :key="i">
							<template v-if="!loading">
								<ion-card>
									<ion-card-header>
										<ion-card-title>{{ book.title }}</ion-card-title>
										<ion-card-subtitle>{{
											book.authorName || "N/A"
										}}</ion-card-subtitle>
									</ion-card-header>

									<ion-card-content>
										{{ book.summary || "N/A" }}
									</ion-card-content>
								</ion-card>
							</template>
							<div v-else>
								<ion-spinner></ion-spinner>
							</div>
						</ion-col>
					</ion-row>
				</ion-grid>
			</div>
			<ion-fab slot="fixed" vertical="top" horizontal="end">
				<ion-fab-button>
					<ion-icon :icon="add"></ion-icon>
				</ion-fab-button>
			</ion-fab>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { add } from 'ionicons/icons';
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonCardSubtitle,
	IonSpinner,
	IonCol,
	IonGrid,
	IonRow,
	IonFab,
  IonFabButton,
} from "@ionic/vue";
import { useBookStore } from "@/stores/bookStore";
import { storeToRefs } from "pinia";
const { bookList, loading } = storeToRefs(useBookStore());
const { fetchBookList } = useBookStore();
onMounted(async () => {
	await fetchBookList();
});
</script>

<style scoped>
#container {
	text-align: center;
  margin-top: 6rem;
}

#container strong {
	font-size: 20px;
	line-height: 26px;
}

#container p {
	font-size: 16px;
	line-height: 22px;

	color: #8c8c8c;

	margin: 0;
}

#container a {
	text-decoration: none;
}

.cards-grid {
	display: grid;
	grid-template-columns: minmax(100px, 1fr);
	gap: 1rem;
}
</style>
