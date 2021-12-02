import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const Homepage = (props) => {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta
					name='description'
					content='Browse a huge list of highly active React meetups!!'
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</>
	);
};

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	// fetch data from an API
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

export async function getStaticProps() {
	// Fetch data from an API
	const client = await MongoClient.connect(
		'mongodb+srv://root:root@cluster0.03em7.mongodb.net/meetups'
	);

	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => {
				return {
					key: meetup._id.toString(),
					id: meetup._id.toString(),
					title: meetup.title,
					address: meetup.address,
					image: meetup.image,
				};
			}),
		},
		revalidate: 1,
	};
}

export default Homepage;
