import sinon from 'sinon';

import InstitutionalReducer, {
  fetchHistoricalReports,
  getComplianceClientId,
  getComplianceProjectId,
  getComplianceTenantSubdomain,
  getComplianceHistoricalReports,
  getComplianceReportsInProgress,
  getInstitutionalConnectRequests,
  complianceActivated,
  getComplianceReportsInProgressByAddress,
  generateComplianceReport,
} from './institutional';

jest.mock('../../../shared/lib/storage-helpers', () => ({
  getStorageItem: jest.fn(),
  setStorageItem: jest.fn(),
}));

const mockSyncReportsInProgress = jest.fn();
const mockGenerateComplianceReport = jest.fn();
jest.mock('../../store/actions', () => ({
  getMMIActions: () => ({
    generateComplianceReport: mockGenerateComplianceReport,
    getComplianceHistoricalReportsByAddress: jest.fn(),
    syncReportsInProgress: mockSyncReportsInProgress,
  }),
}));

describe('Institutional Duck', () => {
  afterEach(() => {
    sinon.restore();
  });

  const initState = {
    historicalReports: {},
    complianceProjectId: '',
    complianceClientId: '',
    reportsInProgress: {},
  };

  describe('InstitutionalReducer()', () => {
    it('should initialize state', () => {
      expect(InstitutionalReducer(undefined, {})).toStrictEqual(initState);
    });

    it('should correctly return all getters values', async () => {
      const state = {
        metamask: {
          institutionalFeatures: {
            complianceProjectId: 'complianceProjectId',
            complianceClientId: 'complianceClientId',
            complianceTenantSubdomain: 'subdomain',
            reportsInProgress: { id: [{ reportId: 'id' }] },
            connectRequests: [{ id: 'id' }],
          },
        },
        institutionalFeatures: {
          historicalReports: { id: [{ reportId: 'id' }] },
        },
      };
      expect(getComplianceProjectId(state)).toBe('complianceProjectId');
      expect(getComplianceClientId(state)).toBe('complianceClientId');
      expect(getComplianceTenantSubdomain(state)).toBe('subdomain');
      expect(getComplianceHistoricalReports(state).id[0].reportId).toBe('id');
      expect(getComplianceReportsInProgress(state).id).toHaveLength(1);
      expect(getInstitutionalConnectRequests(state)).toHaveLength(1);
      expect(complianceActivated(state)).toBe(true);
      expect(getComplianceReportsInProgressByAddress('id')(state)).toHaveLength(
        1,
      );
      await fetchHistoricalReports('0xAddress', 'projectId')(
        jest.fn().mockReturnValue({ items: [{ status: 'test' }] }),
        () => state,
      );
      expect(mockSyncReportsInProgress).toHaveBeenCalled();
      await generateComplianceReport('0xAddress')(jest.fn(), () => state);
      expect(mockGenerateComplianceReport).toHaveBeenCalled();
    });
  });
});