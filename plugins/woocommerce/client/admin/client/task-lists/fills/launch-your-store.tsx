/**
 * External dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { WooOnboardingTaskListItem } from '@woocommerce/onboarding';

const LaunchYourStoreTaskItem = () => {
	return (
		<WooOnboardingTaskListItem id="launch-your-store">
			{ ( {
				defaultTaskItem: DefaultTaskItem,
				isComplete,
			}: {
				defaultTaskItem: ( props: {
					isClickable: boolean;
				} ) => JSX.Element;
				onClick: () => void;
				isComplete: boolean;
			} ) => {
				return <DefaultTaskItem isClickable={ ! isComplete } />;
			} }
		</WooOnboardingTaskListItem>
	);
};

registerPlugin( 'woocommerce-admin-task-launch-your-store', {
	scope: 'woocommerce-tasks',
	render: LaunchYourStoreTaskItem,
} );
