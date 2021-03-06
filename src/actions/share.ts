import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Share
 * @section Content Types > Sharing > System
 * @icon Sharing
 *
 * Prompts to share the input.
 *
 * ```js
 * share();
 * ```
 */

const share = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.share',
  WFWorkflowActionParameters: {},
});

export default share;
